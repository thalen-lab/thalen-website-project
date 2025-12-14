import { z } from "zod";
import { publicProcedure, router } from "../_core/trpc";
import { getDb } from "../db";
import { leads } from "../../drizzle/schema";

export const leadsRouter = router({
  /**
   * Create a new lead from resource download form
   */
  create: publicProcedure
    .input(
      z.object({
        name: z.string().min(1, "Name is required"),
        email: z.string().email("Invalid email address"),
        company: z.string().optional(),
        jobTitle: z.string().optional(),
        phone: z.string().optional(),
        resource: z.string().min(1, "Resource identifier is required"),
        source: z.string().optional(),
        notes: z.string().optional(),
      })
    )
    .mutation(async ({ input }) => {
      const db = await getDb();
      if (!db) {
        throw new Error("Database not available");
      }

      try {
        const result = await db.insert(leads).values({
          name: input.name,
          email: input.email,
          company: input.company || null,
          jobTitle: input.jobTitle || null,
          phone: input.phone || null,
          resource: input.resource,
          source: input.source || null,
          notes: input.notes || null,
          status: "new",
        });

        return {
          success: true,
          leadId: result[0].insertId,
          message: "Lead captured successfully",
        };
      } catch (error) {
        console.error("[Leads] Failed to create lead:", error);
        throw new Error("Failed to capture lead information");
      }
    }),
});
