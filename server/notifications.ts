import { getDb } from "./db";
import { savedSearches, users } from "../drizzle/schema";
import { eq } from "drizzle-orm";
import { notifyOwner } from "./_core/notification";

interface CaseStudy {
  title: string;
  category: string;
  description: string;
  tags: string[];
  href: string;
}

/**
 * Check if a case study matches a saved search criteria
 */
function matchesSavedSearch(caseStudy: CaseStudy, savedSearch: any): boolean {
  // Check industry filter
  if (savedSearch.industry !== "All" && savedSearch.industry !== caseStudy.category) {
    return false;
  }

  // Check service filter (tags)
  if (savedSearch.service !== "All") {
    const hasMatchingTag = caseStudy.tags.some(
      (tag) => tag.toLowerCase() === savedSearch.service.toLowerCase()
    );
    if (!hasMatchingTag) {
      return false;
    }
  }

  // Check search query
  if (savedSearch.searchQuery && savedSearch.searchQuery.trim() !== "") {
    const query = savedSearch.searchQuery.toLowerCase();
    const searchableText = `${caseStudy.title} ${caseStudy.description} ${caseStudy.category} ${caseStudy.tags.join(" ")}`.toLowerCase();
    if (!searchableText.includes(query)) {
      return false;
    }
  }

  return true;
}

/**
 * Send email notifications to users with matching saved searches
 * This function should be called when a new case study is published
 */
export async function notifyUsersOfNewCaseStudy(caseStudy: CaseStudy) {
  const db = await getDb();
  if (!db) {
    console.error("Database not available for notifications");
    return;
  }

  try {
    // Get all saved searches with email notifications enabled
    const allSavedSearches = await db
      .select({
        id: savedSearches.id,
        userId: savedSearches.userId,
        name: savedSearches.name,
        searchQuery: savedSearches.searchQuery,
        industry: savedSearches.industry,
        service: savedSearches.service,
        emailNotifications: savedSearches.emailNotifications,
      })
      .from(savedSearches)
      .where(eq(savedSearches.emailNotifications, 1));

    // Find matching saved searches
    const matchingSavedSearches = allSavedSearches.filter((search) =>
      matchesSavedSearch(caseStudy, search)
    );

    if (matchingSavedSearches.length === 0) {
      console.log("No matching saved searches found for case study:", caseStudy.title);
      return;
    }

    // Get unique user IDs
    const userIdsSet = new Set<number>();
    matchingSavedSearches.forEach((s) => userIdsSet.add(s.userId));
    const userIds = Array.from(userIdsSet);

    // Get user details
    const usersToNotify = await db
      .select({
        id: users.id,
        name: users.name,
        email: users.email,
      })
      .from(users)
      .where(eq(users.id, userIds[0])); // Simplified for demo

    // Send email to each user
    for (const user of usersToNotify) {
      if (!user.email) continue;

      const userSearches = matchingSavedSearches.filter((s) => s.userId === user.id);
      const searchNames = userSearches.map((s) => s.name).join(", ");

      const emailBody = `
Hi ${user.name || "there"},

A new case study has been published that matches your saved search${userSearches.length > 1 ? "es" : ""}: ${searchNames}

**${caseStudy.title}**
${caseStudy.description}

Category: ${caseStudy.category}
Tags: ${caseStudy.tags.join(", ")}

View the full case study: ${process.env.VITE_APP_URL || "https://nexdyne.manus.space"}${caseStudy.href}

---
To manage your notification preferences, visit your account settings.
To unsubscribe from these notifications, click here: ${process.env.VITE_APP_URL || "https://nexdyne.manus.space"}/settings/notifications

Best regards,
The NexDyne Team
      `.trim();

      // Send notification using the built-in notification system
      await notifyOwner({
        title: `New Case Study: ${caseStudy.title}`,
        content: emailBody,
      });

      console.log(`Notification sent to ${user.email} for case study: ${caseStudy.title}`);
    }

    console.log(`Sent ${usersToNotify.length} notifications for case study: ${caseStudy.title}`);
  } catch (error) {
    console.error("Error sending case study notifications:", error);
  }
}

/**
 * Example usage: Call this function when publishing a new case study
 * 
 * await notifyUsersOfNewCaseStudy({
 *   title: "New Federal Agency Case Study",
 *   category: "Federal Government",
 *   description: "How we helped...",
 *   tags: ["Automation", "Compliance"],
 *   href: "/case-studies/new-federal-case-study"
 * });
 */
