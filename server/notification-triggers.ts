/**
 * Notification trigger helpers
 * Functions to send push notifications for various events
 */

import { getDb } from "./db";
import * as schema from "../drizzle/schema";
import { eq } from "drizzle-orm";
import webpush from "web-push";
import { VAPID_KEYS, VAPID_SUBJECT } from "./push-config";

// Configure web-push
webpush.setVapidDetails(
  VAPID_SUBJECT,
  VAPID_KEYS.publicKey,
  VAPID_KEYS.privateKey
);

/**
 * Send notification to all subscribed users
 */
async function sendNotificationToAll(
  title: string,
  body: string,
  category: "case_study" | "event" | "assessment" | "general",
  clickUrl: string,
  icon?: string,
  data?: any
) {
  const db = await getDb();
  if (!db) {
    console.error("[Notifications] Database not available");
    return { success: false, sent: 0, failed: 0 };
  }

  // Get all active subscriptions
  // @ts-ignore
  const subscriptions = await db
    .select()
    // @ts-ignore
    .from(schema.pushSubscriptions)
    // @ts-ignore
    .where(eq(schema.pushSubscriptions.isActive, true));

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
    badge: "/badge.png",
    data: {
      url: clickUrl,
      ...data,
    },
  });

  let sent = 0;
  let failed = 0;

  for (const sub of filteredSubscriptions) {
    try {
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
        badge: "/badge.png",
        data: data || null,
        category,
        clickUrl,
        status: "sent",
        sentAt: new Date(),
      });

      // Update last notification time
      // @ts-ignore
      await db
        // @ts-ignore
        .update(schema.pushSubscriptions)
        .set({
          lastNotificationAt: new Date(),
        })
        // @ts-ignore
        .where(eq(schema.pushSubscriptions.id, sub.id));

      sent++;
    } catch (error: any) {
      console.error("[Notifications] Failed to send notification:", error);

      // Record failure
      // @ts-ignore
      await db.insert(schema.notificationHistory).values({
        subscriptionId: sub.id,
        title,
        body,
        icon: icon || null,
        badge: "/badge.png",
        data: data || null,
        category,
        clickUrl,
        status: "failed",
        errorMessage: error.message,
      });

      // Mark subscription as inactive if endpoint is invalid
      if (error.statusCode === 410 || error.statusCode === 404) {
        // @ts-ignore
        await db
          // @ts-ignore
          .update(schema.pushSubscriptions)
          .set({
            isActive: false,
          })
          // @ts-ignore
          .where(eq(schema.pushSubscriptions.id, sub.id));
      }

      failed++;
    }
  }

  return { success: true, sent, failed, total: filteredSubscriptions.length };
}

/**
 * Trigger notification for new case study
 */
export async function notifyNewCaseStudy(caseStudy: {
  title: string;
  slug: string;
  industry: string;
  summary: string;
}) {
  return await sendNotificationToAll(
    "New Case Study Published",
    `${caseStudy.title} - ${caseStudy.industry}`,
    "case_study",
    `/case-studies/${caseStudy.slug}`,
    "/pwa-icon-192.png",
    {
      caseStudySlug: caseStudy.slug,
      industry: caseStudy.industry,
    }
  );
}

/**
 * Trigger notification for upcoming event
 */
export async function notifyUpcomingEvent(event: {
  title: string;
  slug: string;
  eventType: string;
  startDate: Date;
  hoursBeforeEvent: number;
}) {
  const timeUntilEvent = Math.round(
    (event.startDate.getTime() - Date.now()) / (1000 * 60 * 60)
  );

  return await sendNotificationToAll(
    `Event Starting in ${timeUntilEvent} Hours`,
    `${event.title} - ${event.eventType}`,
    "event",
    `/events/${event.slug}`,
    "/pwa-icon-192.png",
    {
      eventSlug: event.slug,
      eventType: event.eventType,
      startDate: event.startDate.toISOString(),
    }
  );
}

/**
 * Trigger notification for assessment reminder
 */
export async function notifyAssessmentReminder(
  userId: number,
  assessmentType: string,
  daysAgo: number
) {
  const db = await getDb();
  if (!db) return { success: false };

  // Get user's subscription
  // @ts-ignore
  const subscriptions = await db
    .select()
    // @ts-ignore
    .from(schema.pushSubscriptions)
    // @ts-ignore
    .where(
      // @ts-ignore
      eq(schema.pushSubscriptions.userId, userId)
    );

  if (subscriptions.length === 0) {
    return { success: false, sent: 0 };
  }

  const title = "Assessment Reminder";
  const body = `It's been ${daysAgo} days since your last ${assessmentType} assessment. Ready to check your progress?`;
  const clickUrl = `/services/data-analytics/assessment`;

  const payload = JSON.stringify({
    title,
    body,
    icon: "/pwa-icon-192.png",
    badge: "/badge.png",
    data: {
      url: clickUrl,
      assessmentType,
      daysAgo,
    },
  });

  let sent = 0;

  for (const sub of subscriptions) {
    try {
      await webpush.sendNotification(
        {
          endpoint: sub.endpoint,
          keys: sub.keys as any,
        },
        payload
      );

      // @ts-ignore
      await db.insert(schema.notificationHistory).values({
        subscriptionId: sub.id,
        title,
        body,
        icon: "/pwa-icon-192.png",
        badge: "/badge.png",
        data: { assessmentType, daysAgo },
        category: "assessment",
        clickUrl,
        status: "sent",
        sentAt: new Date(),
      });

      sent++;
    } catch (error) {
      console.error("[Notifications] Failed to send assessment reminder:", error);
    }
  }

  return { success: true, sent };
}

/**
 * Trigger notification for general announcement
 */
export async function notifyGeneralAnnouncement(
  title: string,
  body: string,
  clickUrl: string
) {
  return await sendNotificationToAll(
    title,
    body,
    "general",
    clickUrl,
    "/pwa-icon-192.png"
  );
}
