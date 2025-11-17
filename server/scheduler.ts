import { getDb } from "./db";
import { blogPosts, caseStudies, events } from "../drizzle/schema";
import { eq, and, lte } from "drizzle-orm";

/**
 * Check and publish scheduled content that has reached its scheduled time
 * This function should be called periodically (e.g., every minute via cron)
 */
export async function processScheduledContent() {
  const db = await getDb();
  if (!db) {
    console.error('[Scheduler] Database not available');
    return { published: 0, errors: [] };
  }

  const now = new Date();
  let publishedCount = 0;
  const errors: string[] = [];

  try {
    // Process scheduled blog posts
    const scheduledBlogPosts = await db
      .select()
      .from(blogPosts)
      .where(
        and(
          eq(blogPosts.status, 'scheduled'),
          lte(blogPosts.scheduledPublishAt, now)
        )
      );

    for (const post of scheduledBlogPosts) {
      try {
        await db
          .update(blogPosts)
          .set({
            status: 'published',
            publishedAt: now,
            scheduledPublishAt: null,
          })
          .where(eq(blogPosts.id, post.id));
        
        publishedCount++;
        console.log(`[Scheduler] Published blog post: ${post.title} (ID: ${post.id})`);
      } catch (error: any) {
        const errorMsg = `Failed to publish blog post ${post.id}: ${error.message}`;
        errors.push(errorMsg);
        console.error(`[Scheduler] ${errorMsg}`);
      }
    }

    // Process scheduled case studies
    const scheduledCaseStudies = await db
      .select()
      .from(caseStudies)
      .where(
        and(
          eq(caseStudies.status, 'scheduled'),
          lte(caseStudies.scheduledPublishAt, now)
        )
      );

    for (const caseStudy of scheduledCaseStudies) {
      try {
        await db
          .update(caseStudies)
          .set({
            status: 'published',
            publishedAt: now,
            scheduledPublishAt: null,
          })
          .where(eq(caseStudies.id, caseStudy.id));
        
        publishedCount++;
        console.log(`[Scheduler] Published case study: ${caseStudy.title} (ID: ${caseStudy.id})`);
      } catch (error: any) {
        const errorMsg = `Failed to publish case study ${caseStudy.id}: ${error.message}`;
        errors.push(errorMsg);
        console.error(`[Scheduler] ${errorMsg}`);
      }
    }

    // Process scheduled events (change to "upcoming" status)
    const scheduledEvents = await db
      .select()
      .from(events)
      .where(
        and(
          eq(events.status, 'scheduled'),
          lte(events.scheduledPublishAt, now)
        )
      );

    for (const event of scheduledEvents) {
      try {
        await db
          .update(events)
          .set({
            status: 'upcoming',
            scheduledPublishAt: null,
          })
          .where(eq(events.id, event.id));
        
        publishedCount++;
        console.log(`[Scheduler] Published event: ${event.title} (ID: ${event.id})`);
      } catch (error: any) {
        const errorMsg = `Failed to publish event ${event.id}: ${error.message}`;
        errors.push(errorMsg);
        console.error(`[Scheduler] ${errorMsg}`);
      }
    }

    console.log(`[Scheduler] Completed: ${publishedCount} items published, ${errors.length} errors`);
    return { published: publishedCount, errors };
  } catch (error: any) {
    console.error('[Scheduler] Fatal error:', error);
    return { published: publishedCount, errors: [error.message] };
  }
}

/**
 * Start the scheduler to run every minute
 * Call this from your server startup code
 */
export function startScheduler() {
  console.log('[Scheduler] Starting content scheduler...');
  
  // Run immediately on startup
  processScheduledContent();
  
  // Then run every minute
  const interval = setInterval(() => {
    processScheduledContent();
  }, 60 * 1000); // 60 seconds

  // Return cleanup function
  return () => {
    console.log('[Scheduler] Stopping content scheduler...');
    clearInterval(interval);
  };
}
