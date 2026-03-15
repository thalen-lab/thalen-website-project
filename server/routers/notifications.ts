import { router, publicProcedure, protectedProcedure } from "../_core/trpc";
import { z } from "zod";
import { getDb } from "../db";
import * as schema from "../../drizzle/schema";
import { eq, and } from "drizzle-orm";
import webpush from "web-push";
import { VAPID_KEYS, VAPID_SUBJECT } from "../push-config";

// Configure web-push (only if VAPID keys are available)
if (VAPID_KEYS.publicKey && VAPID_KEYS.privateKey) {
  webpush.setVapidDetails(
    VAPID_SUBJECT,
    VAPID_KEYS.publicKey,
    VAPID_KEYS.privateKey
  );
} else {
  console.warn("[Push] VAPID keys not configured — push notifications disabled");
}

/**
 * Notification preferences schema
 */
const notificationPreferencesSchema = z.object({
  caseStudies: z.boolean(),
  events: z.boolean(),
  assessments: z.boolean(),
  general: z.boolean(),
});

/**
 * Push subscription schema
 */
const pushSubscriptionSchema = z.object({
  endpoint: z.string(),
  keys: z.object({
    p256dh: z.string(),
    auth: z.string(),
  }),
});

/**
 * Notification router
 * Handles push notification subscriptions and sending
 */
export const notificationsRouter = router({
  /**
   * Subscribe to push notifications
   */
  subscribe: publicProcedure
    .input(
      z.object({
        subscription: pushSubscriptionSchema,
        preferences: notificationPreferencesSchema.optional(),
        userAgent: z.string().optional(),
        deviceType: z.enum(["ios", "android", "desktop"]).optional(),
      })
    )
    .mutation(async ({ input, ctx }: any) => {
      const { subscription, preferences, userAgent, deviceType } = input;

      const db = await getDb();
      if (!db) throw new Error("Database not available");

      // Check if subscription already exists
      // @ts-ignore
      const existing = await db
        .select()
        // @ts-ignore
        .from(schema.pushSubscriptions)
        // @ts-ignore
        .where(eq(schema.pushSubscriptions.endpoint, subscription.endpoint))
        .limit(1);

      if (existing.length > 0) {
        // Update existing subscription
        // @ts-ignore
        await db
          // @ts-ignore
          .update(schema.pushSubscriptions)
          .set({
            keys: subscription.keys,
            preferences: preferences || {
              caseStudies: true,
              events: true,
              assessments: true,
              general: true,
            },
            userAgent: userAgent || null,
            deviceType: deviceType || null,
            isActive: true,
            updatedAt: new Date(),
          })
          // @ts-ignore
          .where(eq(schema.pushSubscriptions.id, existing[0].id));

        return { success: true, subscriptionId: existing[0].id };
      }

      // Create new subscription
      // @ts-ignore
      const result = await db.insert(schema.pushSubscriptions).values({
        userId: ctx.user?.id || null,
        endpoint: subscription.endpoint,
        keys: subscription.keys,
        preferences: preferences || {
          caseStudies: true,
          events: true,
          assessments: true,
          general: true,
        },
        userAgent: userAgent || null,
        deviceType: deviceType || null,
        isActive: true,
      });

      // @ts-ignore - insertId exists on MySQL result
      return { success: true, subscriptionId: result.insertId };
    }),

  /**
   * Unsubscribe from push notifications
   */
  unsubscribe: publicProcedure
    .input(
      z.object({
        endpoint: z.string(),
      })
    )
    .mutation(async ({ input }: any) => {
      const { endpoint } = input;

      const db = await getDb();
      if (!db) throw new Error("Database not available");

      // @ts-ignore
      await db
        // @ts-ignore
        .update(schema.pushSubscriptions)
        .set({
          isActive: false,
          updatedAt: new Date(),
        })
        // @ts-ignore
        .where(eq(schema.pushSubscriptions.endpoint, endpoint));

      return { success: true };
    }),

  /**
   * Update notification preferences
   */
  updatePreferences: publicProcedure
    .input(
      z.object({
        endpoint: z.string(),
        preferences: notificationPreferencesSchema,
      })
    )
    .mutation(async ({ input }: any) => {
      const { endpoint, preferences } = input;

      const db = await getDb();
      if (!db) throw new Error("Database not available");

      // @ts-ignore
      await db
        // @ts-ignore
        .update(schema.pushSubscriptions)
        .set({
          preferences,
          updatedAt: new Date(),
        })
        // @ts-ignore
        .where(eq(schema.pushSubscriptions.endpoint, endpoint));

      return { success: true };
    }),

  /**
   * Get current subscription status
   */
  getSubscriptionStatus: publicProcedure
    .input(
      z.object({
        endpoint: z.string(),
      })
    )
    .query(async ({ input }: any) => {
      const { endpoint } = input;

      const db = await getDb();
      if (!db) throw new Error("Database not available");

      // @ts-ignore
      const subscription = await db
        .select()
        // @ts-ignore
        .from(schema.pushSubscriptions)
        // @ts-ignore
        .where(eq(schema.pushSubscriptions.endpoint, endpoint))
        .limit(1);

      if (subscription.length === 0) {
        return { subscribed: false, preferences: null };
      }

      return {
        subscribed: subscription[0].isActive,
        preferences: subscription[0].preferences,
      };
    }),

  /**
   * Send a push notification (admin only)
   */
  sendNotification: protectedProcedure
    .input(
      z.object({
        title: z.string(),
        body: z.string(),
        icon: z.string().optional(),
        badge: z.string().optional(),
        category: z.enum(["case_study", "event", "assessment", "general"]),
        clickUrl: z.string().optional(),
        data: z.any().optional(),
        targetSubscriptions: z.array(z.number()).optional(), // Specific subscription IDs
      })
    )
    .mutation(async ({ input, ctx }: any) => {
      // Only admins can send notifications
      if (ctx.user?.role !== "admin") {
        throw new Error("Unauthorized");
      }

      const {
        title,
        body,
        icon,
        badge,
        category,
        clickUrl,
        data,
        targetSubscriptions,
      } = input;

      const db = await getDb();
      if (!db) throw new Error("Database not available");

      // Get target subscriptions
      let subscriptions;
      if (targetSubscriptions && targetSubscriptions.length > 0) {
        // @ts-ignore
        subscriptions = await db
          .select()
          // @ts-ignore
          .from(schema.pushSubscriptions)
          .where(
            and(
              // @ts-ignore
              eq(schema.pushSubscriptions.isActive, true)
              // Filter by IDs would go here
            )
          );
      } else {
        // Send to all active subscriptions with matching preference
        // @ts-ignore
        subscriptions = await db
          .select()
          // @ts-ignore
          .from(schema.pushSubscriptions)
          // @ts-ignore
          .where(eq(schema.pushSubscriptions.isActive, true));
      }

      // Filter by preferences
      const filteredSubscriptions = subscriptions.filter((sub: any) => {
        const prefs = sub.preferences as any;
        switch (category) {
          case "case_study":
            return prefs?.caseStudies === true;
          case "event":
            return prefs?.events === true;
          case "assessment":
            return prefs?.assessments === true;
          case "general":
            return prefs?.general === true;
          default:
            return true;
        }
      });

      const payload = JSON.stringify({
        title,
        body,
        icon: icon || "/pwa-icon-192.png",
        badge: badge || "/badge.png",
        data: {
          url: clickUrl || "/",
          ...data,
        },
      });

      const results = await Promise.allSettled(
        filteredSubscriptions.map(async (sub: any) => {
          try {
            // Send push notification
            await webpush.sendNotification(
              {
                endpoint: sub.endpoint,
                keys: sub.keys as any,
              },
              payload
            );

            // Record in history
            // @ts-ignore
            await db.insert(schema.notificationHistory).values({
              subscriptionId: sub.id,
              title,
              body,
              icon: icon || null,
              badge: badge || null,
              data: data || null,
              category,
              clickUrl: clickUrl || null,
              status: "sent",
              sentAt: new Date(),
            });

            // Update last notification time
      // @ts-ignore - TypeScript cache issue with schema exports
      await db
        // @ts-ignore
        .update(schema.pushSubscriptions)
              .set({
                lastNotificationAt: new Date(),
              })
              // @ts-ignore
              .where(eq(schema.pushSubscriptions.id, sub.id));

            return { success: true, subscriptionId: sub.id };
          } catch (error: any) {
            console.error("Failed to send notification:", error);

            // Record failure in history
            // @ts-ignore
            await db.insert(schema.notificationHistory).values({
              subscriptionId: sub.id,
              title,
              body,
              icon: icon || null,
              badge: badge || null,
              data: data || null,
              category,
              clickUrl: clickUrl || null,
              status: "failed",
              errorMessage: error.message,
            });

            // If subscription is invalid, mark as inactive
            if (error.statusCode === 410 || error.statusCode === 404) {
              // @ts-ignore - TypeScript cache issue with schema exports
              await db
                // @ts-ignore
                .update(schema.pushSubscriptions)
                .set({
                  isActive: false,
                })
                // @ts-ignore
                .where(eq(schema.pushSubscriptions.id, sub.id));
            }

            return { success: false, subscriptionId: sub.id, error: error.message };
          }
        })
      );

      const successful = results.filter((r: any) => r.status === "fulfilled").length;
      const failed = results.filter((r: any) => r.status === "rejected").length;

      return {
        success: true,
        sent: successful,
        failed,
        total: filteredSubscriptions.length,
      };
    }),

  /**
   * Track notification click
   */
  trackClick: publicProcedure
    .input(
      z.object({
        notificationId: z.number(),
      })
    )
    .mutation(async ({ input }: any) => {
      const { notificationId } = input;

      const db = await getDb();
      if (!db) throw new Error("Database not available");

      // @ts-ignore - TypeScript cache issue with schema exports
      await db
        // @ts-ignore
        .update(schema.notificationHistory)
        .set({
          status: "clicked",
          clickedAt: new Date(),
        })
        // @ts-ignore
        .where(eq(schema.notificationHistory.id, notificationId));

      return { success: true };
    }),

  /**
   * Track notification dismiss
   */
  trackDismiss: publicProcedure
    .input(
      z.object({
        notificationId: z.number(),
      })
    )
    .mutation(async ({ input }: any) => {
      const { notificationId } = input;

      // Just log the dismissal - don't change status if already clicked
      console.log(`Notification ${notificationId} dismissed`);

      return { success: true };
    }),
});
