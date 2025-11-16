import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { notifyOwner } from "./_core/notification";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
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
New Contact Form Submission from NexDyne Website

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
