import { router, publicProcedure } from "./_core/trpc";
import { z } from "zod";
import { getDb } from "./db";
import { blogPosts, caseStudies, events } from "../drizzle/schema";
import { eq, desc, like, or, inArray } from "drizzle-orm";
import { TRPCError } from "@trpc/server";

// Middleware to check if user is admin
const adminProcedure = publicProcedure.use(async ({ ctx, next }) => {
  if (!ctx.user) {
    throw new TRPCError({ code: "UNAUTHORIZED", message: "You must be logged in" });
  }
  if (ctx.user.role !== "admin") {
    throw new TRPCError({ code: "FORBIDDEN", message: "Admin access required" });
  }
  return next({ ctx: { ...ctx, user: ctx.user } });
});

export const adminRouter = router({
  // Blog Posts Management
  blogPosts: router({
    list: adminProcedure
      .input(z.object({ 
        status: z.enum(["draft", "published", "archived"]).optional(),
        search: z.string().optional(),
      }))
      .query(async ({ input }) => {
        const db = await getDb();
        if (!db) return [];
        
        let query = db.select().from(blogPosts);
        
        if (input.status) {
          query = query.where(eq(blogPosts.status, input.status)) as any;
        }
        
        if (input.search) {
          query = query.where(
            or(
              like(blogPosts.title, `%${input.search}%`),
              like(blogPosts.excerpt, `%${input.search}%`)
            )
          ) as any;
        }
        
        const posts = await query.orderBy(desc(blogPosts.createdAt));
        return posts;
      }),

    get: adminProcedure
      .input(z.object({ id: z.number() }))
      .query(async ({ input }) => {
        const db = await getDb();
        if (!db) return null;
        
        const post = await db
          .select()
          .from(blogPosts)
          .where(eq(blogPosts.id, input.id))
          .limit(1);
        
        return post[0] || null;
      }),

    create: adminProcedure
      .input(z.object({
        slug: z.string(),
        title: z.string(),
        excerpt: z.string(),
        content: z.string(),
        featuredImage: z.string().optional(),
        category: z.string(),
        tags: z.string().optional(),
        authorName: z.string(),
        authorSlug: z.string(),
        readTime: z.number(),
        status: z.enum(["draft", "published", "archived"]),
        metaDescription: z.string().optional(),
      }))
      .mutation(async ({ input, ctx }) => {
        const db = await getDb();
        if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR" });
        
        const result = await db.insert(blogPosts).values({
          ...input,
          createdBy: ctx.user.id,
          publishedAt: input.status === "published" ? new Date() : null,
        });
        
        return { id: Number((result as any).insertId), success: true };
      }),

    update: adminProcedure
      .input(z.object({
        id: z.number(),
        slug: z.string(),
        title: z.string(),
        excerpt: z.string(),
        content: z.string(),
        featuredImage: z.string().optional(),
        category: z.string(),
        tags: z.string().optional(),
        authorName: z.string(),
        authorSlug: z.string(),
        readTime: z.number(),
        status: z.enum(["draft", "published", "archived"]),
        metaDescription: z.string().optional(),
      }))
      .mutation(async ({ input }) => {
        const db = await getDb();
        if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR" });
        
        const { id, ...updateData } = input;
        
        await db
          .update(blogPosts)
          .set({
            ...updateData,
            publishedAt: input.status === "published" ? new Date() : null,
          })
          .where(eq(blogPosts.id, id));
        
        return { success: true };
      }),

    delete: adminProcedure
      .input(z.object({ id: z.number() }))
      .mutation(async ({ input }) => {
        const db = await getDb();
        if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR" });
        
        await db.delete(blogPosts).where(eq(blogPosts.id, input.id));
        
        return { success: true };
      }),

    bulkUpdateStatus: adminProcedure
      .input(z.object({
        ids: z.array(z.number()),
        status: z.enum(["draft", "published", "archived"]),
      }))
      .mutation(async ({ input }) => {
        const db = await getDb();
        if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR" });
        
        await db
          .update(blogPosts)
          .set({
            status: input.status,
            publishedAt: input.status === "published" ? new Date() : null,
          })
          .where(inArray(blogPosts.id, input.ids));
        
        return { success: true, count: input.ids.length };
      }),

    bulkDelete: adminProcedure
      .input(z.object({ ids: z.array(z.number()) }))
      .mutation(async ({ input }) => {
        const db = await getDb();
        if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR" });
        
        await db.delete(blogPosts).where(inArray(blogPosts.id, input.ids));
        
        return { success: true, count: input.ids.length };
      }),
  }),

  // Case Studies Management
  caseStudies: router({
    list: adminProcedure
      .input(z.object({ 
        status: z.enum(["draft", "published", "archived"]).optional(),
        search: z.string().optional(),
      }))
      .query(async ({ input }) => {
        const db = await getDb();
        if (!db) return [];
        
        let query = db.select().from(caseStudies);
        
        if (input.status) {
          query = query.where(eq(caseStudies.status, input.status)) as any;
        }
        
        if (input.search) {
          query = query.where(
            or(
              like(caseStudies.title, `%${input.search}%`),
              like(caseStudies.summary, `%${input.search}%`)
            )
          ) as any;
        }
        
        const studies = await query.orderBy(desc(caseStudies.createdAt));
        return studies;
      }),

    get: adminProcedure
      .input(z.object({ id: z.number() }))
      .query(async ({ input }) => {
        const db = await getDb();
        if (!db) return null;
        
        const study = await db
          .select()
          .from(caseStudies)
          .where(eq(caseStudies.id, input.id))
          .limit(1);
        
        return study[0] || null;
      }),

    create: adminProcedure
      .input(z.object({
        slug: z.string(),
        title: z.string(),
        clientName: z.string(),
        industry: z.string(),
        service: z.string(),
        summary: z.string(),
        content: z.string(),
        featuredImage: z.string().optional(),
        metric1Value: z.string().optional(),
        metric1Label: z.string().optional(),
        metric2Value: z.string().optional(),
        metric2Label: z.string().optional(),
        metric3Value: z.string().optional(),
        metric3Label: z.string().optional(),
        tags: z.string().optional(),
        status: z.enum(["draft", "published", "archived"]),
      }))
      .mutation(async ({ input, ctx }) => {
        const db = await getDb();
        if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR" });
        
        const result = await db.insert(caseStudies).values({
          ...input,
          createdBy: ctx.user.id,
          publishedAt: input.status === "published" ? new Date() : null,
        });
        
        return { id: Number((result as any).insertId), success: true };
      }),

    update: adminProcedure
      .input(z.object({
        id: z.number(),
        slug: z.string(),
        title: z.string(),
        clientName: z.string(),
        industry: z.string(),
        service: z.string(),
        summary: z.string(),
        content: z.string(),
        featuredImage: z.string().optional(),
        metric1Value: z.string().optional(),
        metric1Label: z.string().optional(),
        metric2Value: z.string().optional(),
        metric2Label: z.string().optional(),
        metric3Value: z.string().optional(),
        metric3Label: z.string().optional(),
        tags: z.string().optional(),
        status: z.enum(["draft", "published", "archived"]),
      }))
      .mutation(async ({ input }) => {
        const db = await getDb();
        if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR" });
        
        const { id, ...updateData } = input;
        
        await db
          .update(caseStudies)
          .set({
            ...updateData,
            publishedAt: input.status === "published" ? new Date() : null,
          })
          .where(eq(caseStudies.id, id));
        
        return { success: true };
      }),

    delete: adminProcedure
      .input(z.object({ id: z.number() }))
      .mutation(async ({ input }) => {
        const db = await getDb();
        if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR" });
        
        await db.delete(caseStudies).where(eq(caseStudies.id, input.id));
        
        return { success: true };
      }),

    bulkUpdateStatus: adminProcedure
      .input(z.object({
        ids: z.array(z.number()),
        status: z.enum(["draft", "published", "archived"]),
      }))
      .mutation(async ({ input }) => {
        const db = await getDb();
        if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR" });
        
        await db
          .update(caseStudies)
          .set({ status: input.status })
          .where(inArray(caseStudies.id, input.ids));
        
        return { success: true, count: input.ids.length };
      }),

    bulkDelete: adminProcedure
      .input(z.object({ ids: z.array(z.number()) }))
      .mutation(async ({ input }) => {
        const db = await getDb();
        if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR" });
        
        await db.delete(caseStudies).where(inArray(caseStudies.id, input.ids));
        
        return { success: true, count: input.ids.length };
      }),
  }),

  // Events Management
  events: router({
    list: adminProcedure
      .input(z.object({ 
        status: z.enum(["upcoming", "ongoing", "completed", "cancelled"]).optional(),
        search: z.string().optional(),
      }))
      .query(async ({ input }) => {
        const db = await getDb();
        if (!db) return [];
        
        let query = db.select().from(events);
        
        if (input.status) {
          query = query.where(eq(events.status, input.status)) as any;
        }
        
        if (input.search) {
          query = query.where(
            or(
              like(events.title, `%${input.search}%`),
              like(events.description, `%${input.search}%`)
            )
          ) as any;
        }
        
        const eventsList = await query.orderBy(desc(events.startDate));
        return eventsList;
      }),

    get: adminProcedure
      .input(z.object({ id: z.number() }))
      .query(async ({ input }) => {
        const db = await getDb();
        if (!db) return null;
        
        const event = await db
          .select()
          .from(events)
          .where(eq(events.id, input.id))
          .limit(1);
        
        return event[0] || null;
      }),

    create: adminProcedure
      .input(z.object({
        slug: z.string(),
        title: z.string(),
        eventType: z.string(),
        description: z.string(),
        content: z.string(),
        featuredImage: z.string().optional(),
        startDate: z.date(),
        endDate: z.date().optional(),
        location: z.string().optional(),
        registrationUrl: z.string().optional(),
        speakers: z.string().optional(),
        tags: z.string().optional(),
        status: z.enum(["upcoming", "ongoing", "completed", "cancelled"]),
      }))
      .mutation(async ({ input, ctx }) => {
        const db = await getDb();
        if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR" });
        
        const result = await db.insert(events).values({
          ...input,
          createdBy: ctx.user.id,
        });
        
        return { id: Number((result as any).insertId), success: true };
      }),

    update: adminProcedure
      .input(z.object({
        id: z.number(),
        slug: z.string(),
        title: z.string(),
        eventType: z.string(),
        description: z.string(),
        content: z.string(),
        featuredImage: z.string().optional(),
        startDate: z.date(),
        endDate: z.date().optional(),
        location: z.string().optional(),
        registrationUrl: z.string().optional(),
        speakers: z.string().optional(),
        tags: z.string().optional(),
        status: z.enum(["upcoming", "ongoing", "completed", "cancelled"]),
      }))
      .mutation(async ({ input }) => {
        const db = await getDb();
        if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR" });
        
        const { id, ...updateData } = input;
        
        await db
          .update(events)
          .set(updateData)
          .where(eq(events.id, id));
        
        return { success: true };
      }),

    delete: adminProcedure
      .input(z.object({ id: z.number() }))
      .mutation(async ({ input }) => {
        const db = await getDb();
        if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR" });
        
        await db.delete(events).where(eq(events.id, input.id));
        
        return { success: true };
      }),

    bulkUpdateStatus: adminProcedure
      .input(z.object({
        ids: z.array(z.number()),
        status: z.enum(["upcoming", "ongoing", "completed", "cancelled"]),
      }))
      .mutation(async ({ input }) => {
        const db = await getDb();
        if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR" });
        
        await db
          .update(events)
          .set({ status: input.status })
          .where(inArray(events.id, input.ids));
        
        return { success: true, count: input.ids.length };
      }),

    bulkDelete: adminProcedure
      .input(z.object({ ids: z.array(z.number()) }))
      .mutation(async ({ input }) => {
        const db = await getDb();
        if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR" });
        
        await db.delete(events).where(inArray(events.id, input.ids));
        
        return { success: true, count: input.ids.length };
      }),
  }),

  // Dashboard statistics
  stats: adminProcedure.query(async () => {
    const db = await getDb();
    if (!db) return { blogPosts: 0, caseStudies: 0, events: 0 };
    
    const [blogPostsCount] = await db.select().from(blogPosts);
    const [caseStudiesCount] = await db.select().from(caseStudies);
    const [eventsCount] = await db.select().from(events);
    
    return {
      blogPosts: blogPostsCount ? Object.keys(blogPostsCount).length : 0,
      caseStudies: caseStudiesCount ? Object.keys(caseStudiesCount).length : 0,
      events: eventsCount ? Object.keys(eventsCount).length : 0,
    };
  }),
});
