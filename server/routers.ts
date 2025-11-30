import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, protectedProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { notifyOwner } from "./_core/notification";
import { getDb } from "./db";
import { comments, savedSearches, methodologyAssessments } from "../drizzle/schema";
import { eq, and, isNull, desc, sql, count, lt } from "drizzle-orm";
import { checkAssessmentReminders } from "./jobs/assessment-reminders";
import { adminRouter } from "./adminRouters";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  admin: adminRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  comments: router({
    // Get all comments for a specific article
    list: publicProcedure
      .input(z.object({ articleSlug: z.string() }))
      .query(async ({ input }) => {
        const db = await getDb();
        if (!db) return [];
        
        const allComments = await db
          .select()
          .from(comments)
          .where(
            and(
              eq(comments.articleSlug, input.articleSlug),
              eq(comments.status, "approved")
            )
          )
          .orderBy(desc(comments.createdAt));
        
        return allComments;
      }),

    // Create a new comment
    create: publicProcedure
      .input(
        z.object({
          articleSlug: z.string(),
          content: z.string().min(1, "Comment cannot be empty").max(2000, "Comment too long"),
          parentId: z.number().optional(),
        })
      )
      .mutation(async ({ input, ctx }) => {
        // Require authentication to comment
        if (!ctx.user) {
          throw new Error("You must be logged in to comment");
        }

        const db = await getDb();
        if (!db) {
          throw new Error("Database not available");
        }

        const result = await db.insert(comments).values({
          articleSlug: input.articleSlug,
          userId: ctx.user.id,
          userName: ctx.user.name || "Anonymous",
          userEmail: ctx.user.email || undefined,
          content: input.content,
          parentId: input.parentId || null,
          status: "approved", // Auto-approve for now, can add moderation later
        });

        return {
          success: true,
          commentId: Number(result[0].insertId),
        };
      }),

    // Delete a comment (user can delete their own, admin can delete any)
    delete: publicProcedure
      .input(z.object({ commentId: z.number() }))
      .mutation(async ({ input, ctx }) => {
        if (!ctx.user) {
          throw new Error("You must be logged in to delete comments");
        }

        const db = await getDb();
        if (!db) {
          throw new Error("Database not available");
        }

        // Get the comment to check ownership
        const [comment] = await db
          .select()
          .from(comments)
          .where(eq(comments.id, input.commentId))
          .limit(1);

        if (!comment) {
          throw new Error("Comment not found");
        }

        // Check if user owns the comment or is admin
        const isOwner = comment.userId === ctx.user.id;
        const isAdmin = ctx.user.role === "admin";

        if (!isOwner && !isAdmin) {
          throw new Error("You don't have permission to delete this comment");
        }

        // Delete the comment
        await db.delete(comments).where(eq(comments.id, input.commentId));

        return {
          success: true,
        };
      }),
  }),

  savedSearches: router({
    // Create a new saved search
    create: protectedProcedure
      .input(
        z.object({
          name: z.string().min(1, "Name is required"),
          searchQuery: z.string().default(""),
          industry: z.string().default("All"),
          service: z.string().default("All"),
          emailNotifications: z.boolean().default(true),
        })
      )
      .mutation(async ({ input, ctx }) => {
        const db = await getDb();
        if (!db) {
          throw new Error("Database not available");
        }

        const result = await db.insert(savedSearches).values({
          userId: ctx.user.id,
          name: input.name,
          searchQuery: input.searchQuery,
          industry: input.industry,
          service: input.service,
          emailNotifications: input.emailNotifications ? 1 : 0,
        });

        return {
          success: true,
          searchId: Number(result[0].insertId),
        };
      }),

    // Get all saved searches for current user
    list: protectedProcedure.query(async ({ ctx }) => {
      const db = await getDb();
      if (!db) return [];

      const searches = await db
        .select()
        .from(savedSearches)
        .where(eq(savedSearches.userId, ctx.user.id))
        .orderBy(desc(savedSearches.createdAt));

      return searches;
    }),

    // Delete a saved search
    delete: protectedProcedure
      .input(z.object({ searchId: z.number() }))
      .mutation(async ({ input, ctx }) => {
        const db = await getDb();
        if (!db) {
          throw new Error("Database not available");
        }

        // Verify ownership before deleting
        await db
          .delete(savedSearches)
          .where(
            and(
              eq(savedSearches.id, input.searchId),
              eq(savedSearches.userId, ctx.user.id)
            )
          );

        return {
          success: true,
        };
      }),
  }),

  contact: router({
    submit: publicProcedure
      .input(
        z.object({
          name: z.string().min(1, "Name is required"),
          email: z.string().email("Valid email is required"),
          company: z.string().optional(),
          phone: z.string().optional(),
          message: z.string().min(10, "Message must be at least 10 characters"),
          assessmentType: z.string().optional(),
        })
      )
      .mutation(async ({ input }) => {
        try {
          // Send notification to owner
          const emailContent = `
New Contact Form Submission from Thalen Technologies Website

Name: ${input.name}
Email: ${input.email}
Company: ${input.company || 'Not provided'}
Phone: ${input.phone || 'Not provided'}
Assessment Type: ${input.assessmentType || 'General Inquiry'}

Message:
${input.message}
          `.trim();

          const notificationSent = await notifyOwner({
            title: `New Contact: ${input.name}`,
            content: emailContent,
          });

          if (!notificationSent) {
            console.error("[Contact Form] Failed to send notification");
            // Still return success to user - we've logged the submission
          }

          return {
            success: true,
            message: "Thank you for your inquiry. We'll be in touch within 24 hours.",
          };
        } catch (error) {
          console.error("[Contact Form] Error processing submission:", error);
          throw new Error("Failed to submit contact form. Please try again.");
        }
      }),
  }),

  methodologyAssessment: router({
    submit: publicProcedure
      .input(
        z.object({
          agencyName: z.string().min(1, "Agency name is required"),
          contactName: z.string().min(1, "Contact name is required"),
          email: z.string().email("Valid email is required"),
          phone: z.string().optional(),
          authStatus: z.string().min(1, "Authorization status is required"),
          complianceFramework: z.string().min(1, "Compliance framework is required"),
          details: z.string().optional(),
        })
      )
      .mutation(async ({ input }) => {
        try {
          // Save to database
          const db = await getDb();
          if (db) {
            await db.insert(methodologyAssessments).values({
              agencyName: input.agencyName,
              contactName: input.contactName,
              email: input.email,
              phone: input.phone || null,
              authStatus: input.authStatus,
              complianceFramework: input.complianceFramework,
              details: input.details || null,
              status: "new",
            });
          }

          // Send notification to owner
          const emailContent = `
New RAPID Framework Assessment Request from Thalen Technologies Website

Agency: ${input.agencyName}
Contact: ${input.contactName}
Email: ${input.email}
Phone: ${input.phone || 'Not provided'}
Current Authorization Status: ${input.authStatus}
Target Compliance Framework: ${input.complianceFramework}

Additional Details:
${input.details || 'Not provided'}
          `.trim();

          const notificationSent = await notifyOwner({
            title: `New Assessment Request: ${input.agencyName}`,
            content: emailContent,
          });

          if (!notificationSent) {
            console.error("[Methodology Assessment] Failed to send notification");
          }

          return {
            success: true,
            message: "Thank you for your request. We'll respond within 1 business day to schedule your consultation.",
          };
        } catch (error) {
          console.error("[Methodology Assessment] Error processing submission:", error);
          throw new Error("Failed to submit assessment request. Please try again.");
        }
      }),

    // List all assessments (admin only)
    list: protectedProcedure
      .input(
        z.object({
          status: z.enum(["all", "new", "contacted", "qualified", "converted", "closed"]).default("all"),
          search: z.string().optional(),
        })
      )
      .query(async ({ input, ctx }) => {
        // Check admin permission
        if (ctx.user.role !== "admin") {
          throw new Error("Unauthorized");
        }

        const db = await getDb();
        if (!db) return [];

        // Build where conditions
        const conditions = [];

        // Filter by status if not "all"
        if (input.status !== "all") {
          conditions.push(eq(methodologyAssessments.status, input.status));
        }

        // Add search filter if provided
        if (input.search && input.search.trim()) {
          const searchTerm = `%${input.search.trim()}%`;
          conditions.push(
            sql`${methodologyAssessments.agencyName} LIKE ${searchTerm} OR ${methodologyAssessments.contactName} LIKE ${searchTerm} OR ${methodologyAssessments.email} LIKE ${searchTerm}`
          );
        }

        // Build and execute query
        let query = db.select().from(methodologyAssessments);
        
        if (conditions.length > 0) {
          query = query.where(and(...conditions)) as any;
        }

        const assessments = await query.orderBy(desc(methodologyAssessments.createdAt));

        return assessments;
      }),

    // Update assessment status and notes
    update: protectedProcedure
      .input(
        z.object({
          id: z.number(),
          status: z.enum(["new", "contacted", "qualified", "converted", "closed"]).optional(),
          internalNotes: z.string().optional(),
        })
      )
      .mutation(async ({ input, ctx }) => {
        // Check admin permission
        if (ctx.user.role !== "admin") {
          throw new Error("Unauthorized");
        }

        const db = await getDb();
        if (!db) {
          throw new Error("Database not available");
        }

        const updates: any = {
          updatedAt: new Date(),
        };

        if (input.status) {
          updates.status = input.status;
        }

        if (input.internalNotes !== undefined) {
          updates.internalNotes = input.internalNotes;
        }

        await db
          .update(methodologyAssessments)
          .set(updates)
          .where(eq(methodologyAssessments.id, input.id));

        return {
          success: true,
        };
      }),

    // Manually trigger reminder check (admin only)
    triggerReminders: protectedProcedure.mutation(async ({ ctx }) => {
      // Check admin permission
      if (ctx.user.role !== "admin") {
        throw new Error("Unauthorized");
      }

      try {
        await checkAssessmentReminders();
        return {
          success: true,
          message: "Reminder check completed successfully",
        };
      } catch (error) {
        console.error("[Manual Reminder Trigger] Error:", error);
        throw new Error("Failed to trigger reminders");
      }
    }),

    // Get analytics data
    analytics: protectedProcedure.query(async ({ ctx }) => {
      // Check admin permission
      if (ctx.user.role !== "admin") {
        throw new Error("Unauthorized");
      }

      const db = await getDb();
      if (!db) {
        return {
          totalAssessments: 0,
          byStatus: [],
          byAgencyType: [],
          byComplianceFramework: [],
          byAuthStatus: [],
          conversionRate: 0,
          recentAssessments: [],
        };
      }

      // Get total count
      const [totalResult] = await db
        .select({ count: count() })
        .from(methodologyAssessments);

      // Get counts by status
      const statusCounts = await db
        .select({
          status: methodologyAssessments.status,
          count: count(),
        })
        .from(methodologyAssessments)
        .groupBy(methodologyAssessments.status);

      // Get counts by compliance framework
      const frameworkCounts = await db
        .select({
          framework: methodologyAssessments.complianceFramework,
          count: count(),
        })
        .from(methodologyAssessments)
        .groupBy(methodologyAssessments.complianceFramework);

      // Get counts by authorization status
      const authStatusCounts = await db
        .select({
          authStatus: methodologyAssessments.authStatus,
          count: count(),
        })
        .from(methodologyAssessments)
        .groupBy(methodologyAssessments.authStatus);

      // Calculate conversion rate (qualified + converted / total)
      const qualifiedCount = statusCounts.find(s => s.status === "qualified")?.count || 0;
      const convertedCount = statusCounts.find(s => s.status === "converted")?.count || 0;
      const conversionRate = totalResult.count > 0 
        ? ((qualifiedCount + convertedCount) / totalResult.count) * 100 
        : 0;

      // Get recent assessments (last 10)
      const recentAssessments = await db
        .select()
        .from(methodologyAssessments)
        .orderBy(desc(methodologyAssessments.createdAt))
        .limit(10);

      return {
        totalAssessments: totalResult.count,
        byStatus: statusCounts,
        byComplianceFramework: frameworkCounts,
        byAuthStatus: authStatusCounts,
        conversionRate: Math.round(conversionRate * 10) / 10,
        recentAssessments,
      };
    }),
  }),
});

export type AppRouter = typeof appRouter;
