import { z } from "zod";
import { publicProcedure, router } from "../_core/trpc";
import { getDb } from "../db";
import { jobs, jobApplications } from "../../drizzle/schema";
import { eq, desc, and } from "drizzle-orm";
import { storagePut } from "../storage";
import { notifyOwner } from "../_core/notification";

// Validation schemas
const jobInputSchema = z.object({
  title: z.string().min(1, "Title is required"),
  department: z.string().min(1, "Department is required"),
  location: z.string().min(1, "Location is required"),
  employmentType: z.string().min(1, "Employment type is required"),
  experienceLevel: z.string().min(1, "Experience level is required"),
  salaryRange: z.string().optional(),
  summary: z.string().min(1, "Summary is required"),
  description: z.string().min(1, "Description is required"),
  requirements: z.string().min(1, "Requirements are required"),
  niceToHave: z.string().optional(),
  benefits: z.string().optional(),
  clearanceRequired: z.string().optional(),
  remoteAllowed: z.boolean().optional(),
  applicationDeadline: z.string().optional(),
  status: z.enum(["draft", "published", "closed", "archived"]).optional(),
});

const applicationInputSchema = z.object({
  jobId: z.number(),
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional(),
  linkedinUrl: z.string().url().optional().or(z.literal("")),
  portfolioUrl: z.string().url().optional().or(z.literal("")),
  resumeBase64: z.string().min(1, "Resume is required"),
  resumeFilename: z.string().min(1, "Resume filename is required"),
  resumeMimeType: z.string().min(1, "Resume mime type is required"),
  coverLetter: z.string().optional(),
  referralSource: z.string().optional(),
  workAuthorization: z.string().optional(),
  willingToRelocate: z.boolean().optional(),
  expectedSalary: z.string().optional(),
  availableStartDate: z.string().optional(),
  additionalNotes: z.string().optional(),
});

// Helper to generate slug from title
function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    + "-" + Date.now().toString(36);
}

export const jobsRouter = router({
  // Public: Get all published jobs
  list: publicProcedure.query(async () => {
    const db = await getDb();
    if (!db) return [];

    const allJobs = await db
      .select({
        id: jobs.id,
        slug: jobs.slug,
        title: jobs.title,
        department: jobs.department,
        location: jobs.location,
        employmentType: jobs.employmentType,
        experienceLevel: jobs.experienceLevel,
        salaryRange: jobs.salaryRange,
        summary: jobs.summary,
        remoteAllowed: jobs.remoteAllowed,
        clearanceRequired: jobs.clearanceRequired,
        applicationDeadline: jobs.applicationDeadline,
        publishedAt: jobs.publishedAt,
      })
      .from(jobs)
      .where(eq(jobs.status, "published"))
      .orderBy(desc(jobs.publishedAt));

    return allJobs;
  }),

  // Public: Get a single job by slug
  getBySlug: publicProcedure
    .input(z.object({ slug: z.string() }))
    .query(async ({ input }) => {
      const db = await getDb();
      if (!db) return null;

      const [job] = await db
        .select()
        .from(jobs)
        .where(and(eq(jobs.slug, input.slug), eq(jobs.status, "published")))
        .limit(1);

      return job || null;
    }),

  // Public: Submit a job application
  submitApplication: publicProcedure
    .input(applicationInputSchema)
    .mutation(async ({ input, ctx }) => {
      const db = await getDb();
      if (!db) {
        throw new Error("Database not available");
      }

      // Verify job exists and is published
      const [job] = await db
        .select()
        .from(jobs)
        .where(and(eq(jobs.id, input.jobId), eq(jobs.status, "published")))
        .limit(1);

      if (!job) {
        throw new Error("Job not found or no longer accepting applications");
      }

      // Upload resume to S3
      const resumeBuffer = Buffer.from(input.resumeBase64, "base64");
      const resumeKey = `resumes/${Date.now()}-${input.resumeFilename.replace(/[^a-zA-Z0-9.-]/g, "_")}`;
      
      const { key: resumeS3Key, url: resumeUrl } = await storagePut(
        resumeKey,
        resumeBuffer,
        input.resumeMimeType
      );

      // Create application record
      const result = await db.insert(jobApplications).values({
        jobId: input.jobId,
        firstName: input.firstName,
        lastName: input.lastName,
        email: input.email,
        phone: input.phone || null,
        linkedinUrl: input.linkedinUrl || null,
        portfolioUrl: input.portfolioUrl || null,
        resumeS3Key,
        resumeUrl,
        coverLetter: input.coverLetter || null,
        referralSource: input.referralSource || null,
        workAuthorization: input.workAuthorization || null,
        willingToRelocate: input.willingToRelocate || false,
        expectedSalary: input.expectedSalary || null,
        availableStartDate: input.availableStartDate || null,
        additionalNotes: input.additionalNotes || null,
        userId: ctx.user?.id || null,
        status: "new",
      });

      // Notify owner of new application
      const emailContent = `
New Job Application Received

Position: ${job.title}
Department: ${job.department}

Applicant Information:
Name: ${input.firstName} ${input.lastName}
Email: ${input.email}
Phone: ${input.phone || "Not provided"}
LinkedIn: ${input.linkedinUrl || "Not provided"}
Portfolio: ${input.portfolioUrl || "Not provided"}

Work Authorization: ${input.workAuthorization || "Not specified"}
Willing to Relocate: ${input.willingToRelocate ? "Yes" : "No"}
Expected Salary: ${input.expectedSalary || "Not specified"}
Available Start Date: ${input.availableStartDate || "Not specified"}

Resume: ${resumeUrl}

Cover Letter:
${input.coverLetter || "Not provided"}

Additional Notes:
${input.additionalNotes || "None"}
      `.trim();

      await notifyOwner({
        title: `New Application: ${input.firstName} ${input.lastName} for ${job.title}`,
        content: emailContent,
      });

      return {
        success: true,
        message: "Your application has been submitted successfully. We'll be in touch soon!",
      };
    }),

  // Admin: Get all jobs (including drafts)
  adminList: publicProcedure.query(async ({ ctx }) => {
    if (!ctx.user || ctx.user.role !== "admin") {
      throw new Error("Unauthorized");
    }

    const db = await getDb();
    if (!db) return [];

    const allJobs = await db
      .select()
      .from(jobs)
      .orderBy(desc(jobs.createdAt));

    return allJobs;
  }),

  // Admin: Get a single job by ID
  adminGetById: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ input, ctx }) => {
      if (!ctx.user || ctx.user.role !== "admin") {
        throw new Error("Unauthorized");
      }

      const db = await getDb();
      if (!db) return null;

      const [job] = await db
        .select()
        .from(jobs)
        .where(eq(jobs.id, input.id))
        .limit(1);

      return job || null;
    }),

  // Admin: Create a new job
  adminCreate: publicProcedure
    .input(jobInputSchema)
    .mutation(async ({ input, ctx }) => {
      if (!ctx.user || ctx.user.role !== "admin") {
        throw new Error("Unauthorized");
      }

      const db = await getDb();
      if (!db) {
        throw new Error("Database not available");
      }

      const slug = generateSlug(input.title);
      const now = new Date();

      const result = await db.insert(jobs).values({
        slug,
        title: input.title,
        department: input.department,
        location: input.location,
        employmentType: input.employmentType,
        experienceLevel: input.experienceLevel,
        salaryRange: input.salaryRange || null,
        summary: input.summary,
        description: input.description,
        requirements: input.requirements,
        niceToHave: input.niceToHave || null,
        benefits: input.benefits || null,
        clearanceRequired: input.clearanceRequired || "None",
        remoteAllowed: input.remoteAllowed || false,
        applicationDeadline: input.applicationDeadline ? new Date(input.applicationDeadline) : null,
        status: input.status || "draft",
        createdBy: ctx.user.id,
        publishedAt: input.status === "published" ? now : null,
      });

      return {
        success: true,
        id: Number((result as any)[0]?.insertId || 0),
        slug,
      };
    }),

  // Admin: Update a job
  adminUpdate: publicProcedure
    .input(z.object({ id: z.number() }).merge(jobInputSchema.partial()))
    .mutation(async ({ input, ctx }) => {
      if (!ctx.user || ctx.user.role !== "admin") {
        throw new Error("Unauthorized");
      }

      const db = await getDb();
      if (!db) {
        throw new Error("Database not available");
      }

      const { id, ...updateData } = input;

      // Get current job to check status change
      const [currentJob] = await db
        .select()
        .from(jobs)
        .where(eq(jobs.id, id))
        .limit(1);

      if (!currentJob) {
        throw new Error("Job not found");
      }

      // Set publishedAt if status is changing to published
      const updates: any = { ...updateData };
      if (updateData.status === "published" && currentJob.status !== "published") {
        updates.publishedAt = new Date();
      }

      if (updateData.applicationDeadline) {
        updates.applicationDeadline = new Date(updateData.applicationDeadline);
      }

      await db.update(jobs).set(updates).where(eq(jobs.id, id));

      return { success: true };
    }),

  // Admin: Delete a job
  adminDelete: publicProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ input, ctx }) => {
      if (!ctx.user || ctx.user.role !== "admin") {
        throw new Error("Unauthorized");
      }

      const db = await getDb();
      if (!db) {
        throw new Error("Database not available");
      }

      await db.delete(jobs).where(eq(jobs.id, input.id));

      return { success: true };
    }),

  // Admin: Get applications for a job
  adminGetApplications: publicProcedure
    .input(z.object({ jobId: z.number().optional() }))
    .query(async ({ input, ctx }) => {
      if (!ctx.user || ctx.user.role !== "admin") {
        throw new Error("Unauthorized");
      }

      const db = await getDb();
      if (!db) return [];

      let query = db
        .select({
          application: jobApplications,
          jobTitle: jobs.title,
          jobDepartment: jobs.department,
        })
        .from(jobApplications)
        .leftJoin(jobs, eq(jobApplications.jobId, jobs.id))
        .orderBy(desc(jobApplications.createdAt));

      if (input.jobId) {
        query = query.where(eq(jobApplications.jobId, input.jobId)) as any;
      }

      const applications = await query;

      return applications.map((row) => ({
        ...row.application,
        jobTitle: row.jobTitle,
        jobDepartment: row.jobDepartment,
      }));
    }),

  // Admin: Update application status
  adminUpdateApplicationStatus: publicProcedure
    .input(
      z.object({
        id: z.number(),
        status: z.enum([
          "new",
          "reviewing",
          "phone_screen",
          "interview",
          "offer",
          "hired",
          "rejected",
          "withdrawn",
        ]),
        internalNotes: z.string().optional(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      if (!ctx.user || ctx.user.role !== "admin") {
        throw new Error("Unauthorized");
      }

      const db = await getDb();
      if (!db) {
        throw new Error("Database not available");
      }

      const updates: any = { status: input.status };
      if (input.internalNotes !== undefined) {
        updates.internalNotes = input.internalNotes;
      }

      await db
        .update(jobApplications)
        .set(updates)
        .where(eq(jobApplications.id, input.id));

      return { success: true };
    }),
});
