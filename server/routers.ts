import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { notifyOwner } from "./_core/notification";
import { getDb } from "./db";
import { comments, savedSearches } from "../drizzle/schema";
import { eq, and, isNull, desc } from "drizzle-orm";
import { adminRouter } from "./adminRouters";
import { notificationsRouter } from "./routers/notifications";
import { leadsRouter } from "./routers/leads";
import { jobsRouter } from "./routers/jobs";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  admin: adminRouter,
  notifications: notificationsRouter,
  leads: leadsRouter,
  jobs: jobsRouter,
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
        if (comment.userId !== ctx.user.id && ctx.user.role !== "admin") {
          throw new Error("You don't have permission to delete this comment");
        }

        await db.delete(comments).where(eq(comments.id, input.commentId));

        return { success: true };
      }),
  }),

  savedSearches: router({
    // Get all saved searches for the current user
    list: publicProcedure.query(async ({ ctx }) => {
      if (!ctx.user) return [];
      
      const db = await getDb();
      if (!db) return [];
      
      const searches = await db
        .select()
        .from(savedSearches)
        .where(eq(savedSearches.userId, ctx.user.id))
        .orderBy(desc(savedSearches.createdAt));
      
      return searches;
    }),

    // Create a new saved search
    create: publicProcedure
      .input(
        z.object({
          name: z.string().min(1, "Name is required"),
          searchQuery: z.string().default(""),
          industry: z.string().default("All"),
          service: z.string().default("All"),
          emailNotifications: z.number().default(1),
        })
      )
      .mutation(async ({ input, ctx }) => {
        if (!ctx.user) {
          throw new Error("You must be logged in to save searches");
        }

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
          emailNotifications: input.emailNotifications,
        });

        return { success: true, id: Number((result as any).insertId || 0) };
      }),

    // Delete a saved search
    delete: publicProcedure
      .input(z.object({ id: z.number() }))
      .mutation(async ({ input, ctx }) => {
        if (!ctx.user) {
          throw new Error("You must be logged in to delete saved searches");
        }

        const db = await getDb();
        if (!db) {
          throw new Error("Database not available");
        }

        // Only allow users to delete their own saved searches
        await db
          .delete(savedSearches)
          .where(
            and(
              eq(savedSearches.id, input.id),
              eq(savedSearches.userId, ctx.user.id)
            )
          );

        return { success: true };
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
});

export type AppRouter = typeof appRouter;
