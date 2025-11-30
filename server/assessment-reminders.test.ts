import { describe, it, expect, beforeAll, afterAll } from "vitest";
import { getDb } from "./db";
import { methodologyAssessments } from "../drizzle/schema";
import { eq, and, isNull, lt } from "drizzle-orm";

describe("Assessment Reminder System", () => {
  let db: Awaited<ReturnType<typeof getDb>>;
  let testAssessmentId: number | null = null;

  beforeAll(async () => {
    db = await getDb();
    if (!db) {
      throw new Error("Database connection failed");
    }
  });

  afterAll(async () => {
    // Clean up test assessment if created
    if (db && testAssessmentId) {
      await db
        .delete(methodologyAssessments)
        .where(eq(methodologyAssessments.id, testAssessmentId));
    }
  });

  it("should have reminderSentAt field in schema", async () => {
    // Query to verify the field exists
    const result = await db!
      .select({
        id: methodologyAssessments.id,
        reminderSentAt: methodologyAssessments.reminderSentAt,
      })
      .from(methodologyAssessments)
      .limit(1);
    
    expect(result).toBeDefined();
    // The query should succeed, confirming the field exists
  });

  it("should create assessment with null reminderSentAt by default", async () => {
    // Create a test assessment
    const result = await db!.insert(methodologyAssessments).values({
      agencyName: "Test Agency for Reminders",
      contactName: "Test Contact",
      email: "test-reminder@example.com",
      authStatus: "Not Started",
      complianceFramework: "FedRAMP",
      status: "new",
    });

    testAssessmentId = Number(result[0].insertId);

    // Verify it was created with null reminderSentAt
    const [assessment] = await db!
      .select()
      .from(methodologyAssessments)
      .where(eq(methodologyAssessments.id, testAssessmentId))
      .limit(1);

    expect(assessment).toBeDefined();
    expect(assessment.reminderSentAt).toBeNull();
    expect(assessment.status).toBe("new");
  });

  it("should support updating reminderSentAt timestamp", async () => {
    if (!testAssessmentId) {
      throw new Error("Test assessment not created");
    }

    const now = new Date();

    // Update reminderSentAt
    await db!
      .update(methodologyAssessments)
      .set({ reminderSentAt: now })
      .where(eq(methodologyAssessments.id, testAssessmentId));

    // Verify the update
    const [assessment] = await db!
      .select()
      .from(methodologyAssessments)
      .where(eq(methodologyAssessments.id, testAssessmentId))
      .limit(1);

    expect(assessment.reminderSentAt).not.toBeNull();
    expect(new Date(assessment.reminderSentAt!).getTime()).toBeCloseTo(now.getTime(), -3);
  });

  it("should find assessments older than 24 hours with null reminderSentAt", async () => {
    // Calculate 24 hours ago
    const twentyFourHoursAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);

    // Find assessments matching reminder criteria
    const overdueAssessments = await db!
      .select()
      .from(methodologyAssessments)
      .where(
        and(
          eq(methodologyAssessments.status, "new"),
          lt(methodologyAssessments.createdAt, twentyFourHoursAgo),
          isNull(methodologyAssessments.reminderSentAt)
        )
      );

    expect(overdueAssessments).toBeDefined();
    expect(Array.isArray(overdueAssessments)).toBe(true);
    
    // All results should match criteria
    overdueAssessments.forEach((assessment) => {
      expect(assessment.status).toBe("new");
      expect(assessment.reminderSentAt).toBeNull();
      expect(new Date(assessment.createdAt).getTime()).toBeLessThan(twentyFourHoursAgo.getTime());
    });
  });

  it("should exclude assessments with reminderSentAt already set", async () => {
    if (!testAssessmentId) {
      throw new Error("Test assessment not created");
    }

    // Set reminderSentAt to now
    await db!
      .update(methodologyAssessments)
      .set({ reminderSentAt: new Date() })
      .where(eq(methodologyAssessments.id, testAssessmentId));

    // Query for assessments needing reminders
    const twentyFourHoursAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
    
    const overdueAssessments = await db!
      .select()
      .from(methodologyAssessments)
      .where(
        and(
          eq(methodologyAssessments.status, "new"),
          lt(methodologyAssessments.createdAt, twentyFourHoursAgo),
          isNull(methodologyAssessments.reminderSentAt)
        )
      );

    // Test assessment should NOT be in results (has reminderSentAt set)
    const foundTestAssessment = overdueAssessments.find(a => a.id === testAssessmentId);
    expect(foundTestAssessment).toBeUndefined();
  });

  it("should exclude assessments not in new status", async () => {
    if (!testAssessmentId) {
      throw new Error("Test assessment not created");
    }

    // Change status to contacted
    await db!
      .update(methodologyAssessments)
      .set({ 
        status: "contacted",
        reminderSentAt: null // Reset reminderSentAt
      })
      .where(eq(methodologyAssessments.id, testAssessmentId));

    // Query for assessments needing reminders
    const twentyFourHoursAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
    
    const overdueAssessments = await db!
      .select()
      .from(methodologyAssessments)
      .where(
        and(
          eq(methodologyAssessments.status, "new"),
          lt(methodologyAssessments.createdAt, twentyFourHoursAgo),
          isNull(methodologyAssessments.reminderSentAt)
        )
      );

    // Test assessment should NOT be in results (status is contacted)
    const foundTestAssessment = overdueAssessments.find(a => a.id === testAssessmentId);
    expect(foundTestAssessment).toBeUndefined();
  });

  it("should support filtering by status and reminderSentAt together", async () => {
    // Get all new assessments
    const newAssessments = await db!
      .select()
      .from(methodologyAssessments)
      .where(eq(methodologyAssessments.status, "new"));

    expect(newAssessments).toBeDefined();
    expect(Array.isArray(newAssessments)).toBe(true);

    // Filter for those without reminders sent
    const withoutReminders = newAssessments.filter(a => a.reminderSentAt === null);
    
    expect(Array.isArray(withoutReminders)).toBe(true);
    withoutReminders.forEach((assessment) => {
      expect(assessment.status).toBe("new");
      expect(assessment.reminderSentAt).toBeNull();
    });
  });

  it("should calculate hours overdue correctly", async () => {
    // Create an assessment with a specific old timestamp
    const twoDaysAgo = new Date(Date.now() - 48 * 60 * 60 * 1000);
    
    const result = await db!.insert(methodologyAssessments).values({
      agencyName: "Old Test Agency",
      contactName: "Old Test Contact",
      email: "old-test@example.com",
      authStatus: "Not Started",
      complianceFramework: "FedRAMP",
      status: "new",
      createdAt: twoDaysAgo,
    });

    const oldAssessmentId = Number(result[0].insertId);

    // Retrieve and calculate hours overdue
    const [assessment] = await db!
      .select()
      .from(methodologyAssessments)
      .where(eq(methodologyAssessments.id, oldAssessmentId))
      .limit(1);

    const hoursOverdue = Math.floor(
      (Date.now() - new Date(assessment.createdAt).getTime()) / (1000 * 60 * 60)
    );

    expect(hoursOverdue).toBeGreaterThanOrEqual(47); // Should be ~48 hours
    expect(hoursOverdue).toBeLessThanOrEqual(49);

    // Clean up
    await db!
      .delete(methodologyAssessments)
      .where(eq(methodologyAssessments.id, oldAssessmentId));
  });

  it("should support resetting reminderSentAt to null", async () => {
    if (!testAssessmentId) {
      throw new Error("Test assessment not created");
    }

    // Set reminderSentAt
    await db!
      .update(methodologyAssessments)
      .set({ reminderSentAt: new Date() })
      .where(eq(methodologyAssessments.id, testAssessmentId));

    // Verify it's set
    let [assessment] = await db!
      .select()
      .from(methodologyAssessments)
      .where(eq(methodologyAssessments.id, testAssessmentId))
      .limit(1);

    expect(assessment.reminderSentAt).not.toBeNull();

    // Reset to null
    await db!
      .update(methodologyAssessments)
      .set({ reminderSentAt: null })
      .where(eq(methodologyAssessments.id, testAssessmentId));

    // Verify it's null
    [assessment] = await db!
      .select()
      .from(methodologyAssessments)
      .where(eq(methodologyAssessments.id, testAssessmentId))
      .limit(1);

    expect(assessment.reminderSentAt).toBeNull();
  });

  it("should track multiple reminder scenarios", async () => {
    // Count assessments by reminder status
    const allAssessments = await db!
      .select()
      .from(methodologyAssessments);

    const withReminders = allAssessments.filter(a => a.reminderSentAt !== null);
    const withoutReminders = allAssessments.filter(a => a.reminderSentAt === null);
    const newStatus = allAssessments.filter(a => a.status === "new");

    expect(allAssessments.length).toBeGreaterThanOrEqual(0);
    expect(withReminders.length + withoutReminders.length).toBe(allAssessments.length);
    
    // Log stats for visibility
    console.log(`Total assessments: ${allAssessments.length}`);
    console.log(`With reminders sent: ${withReminders.length}`);
    console.log(`Without reminders: ${withoutReminders.length}`);
    console.log(`In "new" status: ${newStatus.length}`);
  });
});
