import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { getDb } from '../db';
import { jobs, jobApplications } from '../../drizzle/schema';
import { eq } from 'drizzle-orm';

describe('Jobs API', () => {
  let db: Awaited<ReturnType<typeof getDb>>;
  let testJobId: number;
  const testJobSlug = `test-job-${Date.now()}`;

  beforeAll(async () => {
    db = await getDb();
    if (!db) {
      throw new Error('Database connection failed');
    }
  });

  afterAll(async () => {
    // Clean up test data
    if (db && testJobId) {
      await db.delete(jobApplications).where(eq(jobApplications.jobId, testJobId));
      await db.delete(jobs).where(eq(jobs.id, testJobId));
    }
  });

  describe('Jobs Table Schema', () => {
    it('should have jobs table with required columns', async () => {
      // Create a test job to verify schema
      const result = await db!.insert(jobs).values({
        slug: testJobSlug,
        title: 'Test Senior Developer',
        department: 'Engineering',
        location: 'Washington, DC',
        employmentType: 'Full-time',
        experienceLevel: 'Senior',
        salaryRange: '$150,000 - $180,000',
        summary: 'Test job summary for vitest',
        description: 'Test job description with detailed information',
        requirements: '- 5+ years experience\n- Bachelor\'s degree',
        niceToHave: '- AWS certifications',
        benefits: '- Health insurance\n- 401k matching',
        clearanceRequired: 'Secret',
        remoteAllowed: true,
        status: 'published',
        createdBy: null,
        publishedAt: new Date(),
      });

      // Get the inserted job ID
      const [insertedJob] = await db!
        .select()
        .from(jobs)
        .where(eq(jobs.slug, testJobSlug))
        .limit(1);

      expect(insertedJob).toBeDefined();
      expect(insertedJob.title).toBe('Test Senior Developer');
      expect(insertedJob.department).toBe('Engineering');
      expect(insertedJob.location).toBe('Washington, DC');
      expect(insertedJob.employmentType).toBe('Full-time');
      expect(insertedJob.experienceLevel).toBe('Senior');
      expect(insertedJob.status).toBe('published');
      expect(insertedJob.remoteAllowed).toBe(true);
      expect(insertedJob.clearanceRequired).toBe('Secret');

      testJobId = insertedJob.id;
    });

    it('should retrieve published jobs', async () => {
      const publishedJobs = await db!
        .select()
        .from(jobs)
        .where(eq(jobs.status, 'published'));

      expect(Array.isArray(publishedJobs)).toBe(true);
      
      // Our test job should be in the list
      const testJob = publishedJobs.find(j => j.slug === testJobSlug);
      expect(testJob).toBeDefined();
    });

    it('should retrieve job by slug', async () => {
      const [job] = await db!
        .select()
        .from(jobs)
        .where(eq(jobs.slug, testJobSlug))
        .limit(1);

      expect(job).toBeDefined();
      expect(job.title).toBe('Test Senior Developer');
    });
  });

  describe('Job Applications Table Schema', () => {
    it('should create a job application', async () => {
      const result = await db!.insert(jobApplications).values({
        jobId: testJobId,
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@test.com',
        phone: '555-123-4567',
        linkedinUrl: 'https://linkedin.com/in/johndoe',
        portfolioUrl: 'https://johndoe.dev',
        resumeS3Key: 'resumes/test-resume.pdf',
        resumeUrl: 'https://example.com/resumes/test-resume.pdf',
        coverLetter: 'I am excited to apply for this position...',
        referralSource: 'linkedin',
        workAuthorization: 'us_citizen',
        willingToRelocate: true,
        expectedSalary: '$160,000',
        availableStartDate: '2026-02-01',
        additionalNotes: 'Available for immediate interview',
        status: 'new',
      });

      // Verify the application was created
      const [application] = await db!
        .select()
        .from(jobApplications)
        .where(eq(jobApplications.jobId, testJobId))
        .limit(1);

      expect(application).toBeDefined();
      expect(application.firstName).toBe('John');
      expect(application.lastName).toBe('Doe');
      expect(application.email).toBe('john.doe@test.com');
      expect(application.status).toBe('new');
      expect(application.willingToRelocate).toBe(true);
    });

    it('should update application status', async () => {
      // Get the application
      const [application] = await db!
        .select()
        .from(jobApplications)
        .where(eq(jobApplications.jobId, testJobId))
        .limit(1);

      // Update status
      await db!
        .update(jobApplications)
        .set({ status: 'reviewing', internalNotes: 'Strong candidate' })
        .where(eq(jobApplications.id, application.id));

      // Verify update
      const [updatedApplication] = await db!
        .select()
        .from(jobApplications)
        .where(eq(jobApplications.id, application.id))
        .limit(1);

      expect(updatedApplication.status).toBe('reviewing');
      expect(updatedApplication.internalNotes).toBe('Strong candidate');
    });
  });

  describe('Job Status Management', () => {
    it('should update job status', async () => {
      // Update job to closed
      await db!
        .update(jobs)
        .set({ status: 'closed' })
        .where(eq(jobs.id, testJobId));

      // Verify update
      const [updatedJob] = await db!
        .select()
        .from(jobs)
        .where(eq(jobs.id, testJobId))
        .limit(1);

      expect(updatedJob.status).toBe('closed');

      // Restore to published for other tests
      await db!
        .update(jobs)
        .set({ status: 'published' })
        .where(eq(jobs.id, testJobId));
    });
  });
});
