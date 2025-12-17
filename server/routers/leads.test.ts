import { describe, it, expect, beforeAll } from "vitest";
import { appRouter } from "../routers";
import { getDb } from "../db";
import { leads } from "../../drizzle/schema";
import { eq } from "drizzle-orm";

describe("Leads Router", () => {
  let caller: ReturnType<typeof appRouter.createCaller>;

  beforeAll(() => {
    // Create a caller with mock context
    caller = appRouter.createCaller({
      req: {} as any,
      res: {} as any,
      user: null,
    });
  });

  it("should create a lead with required fields", async () => {
    const testLead = {
      name: "Test User",
      email: "test@example.com",
      resource: "fedramp-readiness-checklist",
    };

    const result = await caller.leads.create(testLead);

    expect(result).toBeDefined();
    expect(result.success).toBe(true);
    expect(result.leadId).toBeDefined();
    expect(typeof result.leadId).toBe("number");
    expect(result.message).toBe("Lead captured successfully");

    // Verify the lead was actually saved to database
    const db = await getDb();
    if (db) {
      const savedLead = await db
        .select()
        .from(leads)
        .where(eq(leads.id, result.leadId))
        .limit(1);

      expect(savedLead).toHaveLength(1);
      expect(savedLead[0].name).toBe(testLead.name);
      expect(savedLead[0].email).toBe(testLead.email);
      expect(savedLead[0].resource).toBe(testLead.resource);
      expect(savedLead[0].status).toBe("new");
    }
  });

  it("should create a lead with all optional fields", async () => {
    const testLead = {
      name: "John Smith",
      email: "john.smith@agency.gov",
      company: "Department of Example",
      jobTitle: "IT Security Manager",
      phone: "(202) 555-0100",
      resource: "cmmc-implementation-guide",
      source: "website-download-page",
      notes: "Looking to achieve CMMC Level 2 certification",
    };

    const result = await caller.leads.create(testLead);

    expect(result).toBeDefined();
    expect(result.success).toBe(true);
    expect(result.leadId).toBeDefined();

    // Verify all fields were saved
    const db = await getDb();
    if (db) {
      const savedLead = await db
        .select()
        .from(leads)
        .where(eq(leads.id, result.leadId))
        .limit(1);

      expect(savedLead).toHaveLength(1);
      expect(savedLead[0].name).toBe(testLead.name);
      expect(savedLead[0].email).toBe(testLead.email);
      expect(savedLead[0].company).toBe(testLead.company);
      expect(savedLead[0].jobTitle).toBe(testLead.jobTitle);
      expect(savedLead[0].phone).toBe(testLead.phone);
      expect(savedLead[0].resource).toBe(testLead.resource);
      expect(savedLead[0].source).toBe(testLead.source);
      expect(savedLead[0].notes).toBe(testLead.notes);
    }
  });

  it("should reject lead with missing name", async () => {
    const invalidLead = {
      name: "",
      email: "test@example.com",
      resource: "fedramp-readiness-checklist",
    };

    await expect(caller.leads.create(invalidLead)).rejects.toThrow();
  });

  it("should reject lead with invalid email", async () => {
    const invalidLead = {
      name: "Test User",
      email: "invalid-email",
      resource: "fedramp-readiness-checklist",
    };

    await expect(caller.leads.create(invalidLead)).rejects.toThrow();
  });

  it("should reject lead with missing resource", async () => {
    const invalidLead = {
      name: "Test User",
      email: "test@example.com",
      resource: "",
    };

    await expect(caller.leads.create(invalidLead)).rejects.toThrow();
  });

  it("should handle cloud migration playbook resource", async () => {
    const testLead = {
      name: "Jane Doe",
      email: "jane.doe@example.gov",
      resource: "cloud-migration-playbook",
      company: "Federal Agency",
      notes: "Planning cloud migration in Q2 2025",
    };

    const result = await caller.leads.create(testLead);

    expect(result).toBeDefined();
    expect(result.success).toBe(true);
    expect(result.leadId).toBeDefined();

    const db = await getDb();
    if (db) {
      const savedLead = await db
        .select()
        .from(leads)
        .where(eq(leads.id, result.leadId))
        .limit(1);

      expect(savedLead).toHaveLength(1);
      expect(savedLead[0].resource).toBe("cloud-migration-playbook");
    }
  });
});
