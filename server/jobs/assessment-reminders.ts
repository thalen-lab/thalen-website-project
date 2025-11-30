import { getDb } from "../db";
import { methodologyAssessments } from "../../drizzle/schema";
import { eq, and, isNull, lt, sql } from "drizzle-orm";
import { notifyOwner } from "../_core/notification";

/**
 * Check for assessments that are still in "new" status after 24 hours
 * and send follow-up reminders to the sales team
 */
export async function checkAssessmentReminders() {
  console.log("[Assessment Reminders] Starting reminder check...");
  
  const db = await getDb();
  if (!db) {
    console.error("[Assessment Reminders] Database not available");
    return;
  }

  try {
    // Calculate 24 hours ago timestamp
    const twentyFourHoursAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);

    // Find assessments that:
    // 1. Are still in "new" status
    // 2. Were created more than 24 hours ago
    // 3. Haven't had a reminder sent yet (reminderSentAt is null)
    const overdueAssessments = await db
      .select()
      .from(methodologyAssessments)
      .where(
        and(
          eq(methodologyAssessments.status, "new"),
          lt(methodologyAssessments.createdAt, twentyFourHoursAgo),
          isNull(methodologyAssessments.reminderSentAt)
        )
      );

    console.log(`[Assessment Reminders] Found ${overdueAssessments.length} overdue assessments`);

    // Send reminder for each overdue assessment
    for (const assessment of overdueAssessments) {
      try {
        const hoursOverdue = Math.floor(
          (Date.now() - new Date(assessment.createdAt).getTime()) / (1000 * 60 * 60)
        );

        const emailContent = `
⚠️ FOLLOW-UP REMINDER: Assessment Request Needs Attention

An assessment request has been waiting for ${hoursOverdue} hours without contact.
This exceeds the 1 business day response SLA.

Assessment Details:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Agency: ${assessment.agencyName}
Contact: ${assessment.contactName}
Email: ${assessment.email}
Phone: ${assessment.phone || 'Not provided'}

Current Authorization Status: ${assessment.authStatus}
Target Compliance Framework: ${assessment.complianceFramework}

Additional Details:
${assessment.details || 'Not provided'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Submitted: ${new Date(assessment.createdAt).toLocaleString('en-US', {
  dateStyle: 'full',
  timeStyle: 'short'
})}

⏰ Hours Overdue: ${hoursOverdue} hours

Action Required:
1. Contact the prospect immediately
2. Update status in admin dashboard to "contacted"
3. Add internal notes with next steps

View in Admin Dashboard: /admin/assessments
        `.trim();

        const notificationSent = await notifyOwner({
          title: `⚠️ Overdue Assessment: ${assessment.agencyName} (${hoursOverdue}h)`,
          content: emailContent,
        });

        if (notificationSent) {
          // Mark reminder as sent
          await db
            .update(methodologyAssessments)
            .set({ reminderSentAt: new Date() })
            .where(eq(methodologyAssessments.id, assessment.id));

          console.log(`[Assessment Reminders] Sent reminder for assessment #${assessment.id} (${assessment.agencyName})`);
        } else {
          console.error(`[Assessment Reminders] Failed to send reminder for assessment #${assessment.id}`);
        }
      } catch (error) {
        console.error(`[Assessment Reminders] Error processing assessment #${assessment.id}:`, error);
      }
    }

    console.log("[Assessment Reminders] Reminder check completed");
  } catch (error) {
    console.error("[Assessment Reminders] Error in reminder check:", error);
  }
}

/**
 * Initialize the reminder job to run every hour
 * This checks for overdue assessments and sends reminders
 */
export function initializeAssessmentReminderJob() {
  console.log("[Assessment Reminders] Initializing reminder job (runs every hour)");
  
  // Run immediately on startup
  checkAssessmentReminders();
  
  // Then run every hour
  const intervalMs = 60 * 60 * 1000; // 1 hour
  setInterval(() => {
    checkAssessmentReminders();
  }, intervalMs);
  
  console.log("[Assessment Reminders] Reminder job initialized");
}
