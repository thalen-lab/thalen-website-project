import { int, mysqlEnum, mysqlTable, text, timestamp, varchar, json, boolean } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

/**
 * Comments table for blog post discussions.
 * Supports nested threading via parentId for replies.
 */
export const comments = mysqlTable("comments", {
  id: int("id").autoincrement().primaryKey(),
  /** Article slug to identify which blog post this comment belongs to */
  articleSlug: varchar("articleSlug", { length: 255 }).notNull(),
  /** User ID from users table (nullable for guest comments) */
  userId: int("userId"),
  /** Display name for the commenter */
  userName: varchar("userName", { length: 255 }).notNull(),
  /** Email address (not displayed publicly) */
  userEmail: varchar("userEmail", { length: 320 }),
  /** Comment content */
  content: text("content").notNull(),
  /** Parent comment ID for nested replies (null for top-level comments) */
  parentId: int("parentId"),
  /** Moderation status */
  status: mysqlEnum("status", ["pending", "approved", "rejected"]).default("approved").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Comment = typeof comments.$inferSelect;
export type InsertComment = typeof comments.$inferInsert;

// TODO: Add your tables here
/**
 * Saved searches table for case study filtering.
 * Allows users to save their favorite search/filter combinations for quick access.
 */
export const savedSearches = mysqlTable("saved_searches", {
  id: int("id").autoincrement().primaryKey(),
  /** User ID from users table */
  userId: int("userId").notNull(),
  /** User-defined name for the saved search */
  name: varchar("name", { length: 255 }).notNull(),
  /** Search query string (can be empty) */
  searchQuery: varchar("searchQuery", { length: 255 }).default(""),
  /** Selected industry filter */
  industry: varchar("industry", { length: 100 }).default("All"),
  /** Selected service filter */
  service: varchar("service", { length: 100 }).default("All"),
  /** Whether to send email notifications for matching case studies */
  emailNotifications: int("emailNotifications").default(1).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type SavedSearch = typeof savedSearches.$inferSelect;
export type InsertSavedSearch = typeof savedSearches.$inferInsert;

/**
 * Blog posts table for content management.
 * Stores all blog post content with metadata.
 */
export const blogPosts = mysqlTable("blog_posts", {
  id: int("id").autoincrement().primaryKey(),
  /** URL-friendly slug for the blog post */
  slug: varchar("slug", { length: 255 }).notNull().unique(),
  /** Blog post title */
  title: varchar("title", { length: 500 }).notNull(),
  /** Short excerpt/summary */
  excerpt: text("excerpt").notNull(),
  /** Full blog post content (HTML from WYSIWYG editor) */
  content: text("content").notNull(),
  /** Featured image URL */
  featuredImage: varchar("featuredImage", { length: 500 }),
  /** Category (e.g., "Automation Strategy", "Cybersecurity") */
  category: varchar("category", { length: 100 }).notNull(),
  /** Comma-separated tags */
  tags: text("tags"),
  /** Author name */
  authorName: varchar("authorName", { length: 255 }).notNull(),
  /** Author slug for profile linking */
  authorSlug: varchar("authorSlug", { length: 255 }).notNull(),
  /** Estimated read time in minutes */
  readTime: int("readTime").notNull(),
  /** Publication status */
  status: mysqlEnum("status", ["draft", "published", "archived", "scheduled"]).default("draft").notNull(),
  /** Scheduled publish date/time (null if not scheduled) */
  scheduledPublishAt: timestamp("scheduledPublishAt"),
  /** SEO meta description */
  metaDescription: varchar("metaDescription", { length: 500 }),
  /** User ID of the author/creator */
  createdBy: int("createdBy").notNull(),
  publishedAt: timestamp("publishedAt"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type BlogPost = typeof blogPosts.$inferSelect;
export type InsertBlogPost = typeof blogPosts.$inferInsert;

/**
 * Case studies table for content management.
 * Stores all case study content with metrics and outcomes.
 */
export const caseStudies = mysqlTable("case_studies", {
  id: int("id").autoincrement().primaryKey(),
  /** URL-friendly slug for the case study */
  slug: varchar("slug", { length: 255 }).notNull().unique(),
  /** Case study title */
  title: varchar("title", { length: 500 }).notNull(),
  /** Client/company name (can be anonymized) */
  clientName: varchar("clientName", { length: 255 }).notNull(),
  /** Industry (e.g., "Federal Government", "Healthcare") */
  industry: varchar("industry", { length: 100 }).notNull(),
  /** Service category (e.g., "Automation", "Cloud") */
  service: varchar("service", { length: 100 }).notNull(),
  /** Short summary */
  summary: text("summary").notNull(),
  /** Full case study content (HTML from WYSIWYG editor) */
  content: text("content").notNull(),
  /** Featured image URL */
  featuredImage: varchar("featuredImage", { length: 500 }),
  /** Key metric 1 value (e.g., "85%") */
  metric1Value: varchar("metric1Value", { length: 50 }),
  /** Key metric 1 label (e.g., "Process Automation") */
  metric1Label: varchar("metric1Label", { length: 255 }),
  /** Key metric 2 value */
  metric2Value: varchar("metric2Value", { length: 50 }),
  /** Key metric 2 label */
  metric2Label: varchar("metric2Label", { length: 255 }),
  /** Key metric 3 value */
  metric3Value: varchar("metric3Value", { length: 50 }),
  /** Key metric 3 label */
  metric3Label: varchar("metric3Label", { length: 255 }),
  /** Comma-separated tags */
  tags: text("tags"),
  /** Publication status */
  status: mysqlEnum("status", ["draft", "published", "archived", "scheduled"]).default("draft").notNull(),
  /** Scheduled publish date/time (null if not scheduled) */
  scheduledPublishAt: timestamp("scheduledPublishAt"),
  /** User ID of the creator */
  createdBy: int("createdBy").notNull(),
  publishedAt: timestamp("publishedAt"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type CaseStudy = typeof caseStudies.$inferSelect;
export type InsertCaseStudy = typeof caseStudies.$inferInsert;

/**
 * Events table for content management.
 * Stores webinars, conferences, and other events.
 */
export const events = mysqlTable("events", {
  id: int("id").autoincrement().primaryKey(),
  /** URL-friendly slug for the event */
  slug: varchar("slug", { length: 255 }).notNull().unique(),
  /** Event title */
  title: varchar("title", { length: 500 }).notNull(),
  /** Event type (e.g., "Webinar", "Conference", "Workshop") */
  eventType: varchar("eventType", { length: 100 }).notNull(),
  /** Short description */
  description: text("description").notNull(),
  /** Full event details (HTML from WYSIWYG editor) */
  content: text("content").notNull(),
  /** Event banner/featured image URL */
  featuredImage: varchar("featuredImage", { length: 500 }),
  /** Event start date and time */
  startDate: timestamp("startDate").notNull(),
  /** Event end date and time */
  endDate: timestamp("endDate"),
  /** Event location (or "Virtual") */
  location: varchar("location", { length: 255 }),
  /** Registration URL */
  registrationUrl: varchar("registrationUrl", { length: 500 }),
  /** Speaker names (comma-separated) */
  speakers: text("speakers"),
  /** Comma-separated tags */
  tags: text("tags"),
  /** Event status */
  status: mysqlEnum("status", ["upcoming", "ongoing", "completed", "cancelled", "scheduled"]).default("upcoming").notNull(),
  /** Scheduled publish date/time (null if not scheduled) */
  scheduledPublishAt: timestamp("scheduledPublishAt"),
  /** User ID of the creator */
  createdBy: int("createdBy").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Event = typeof events.$inferSelect;
export type InsertEvent = typeof events.$inferInsert;

/**
 * Media library table for S3-stored assets.
 * Tracks uploaded images and files for content management.
 */
export const media = mysqlTable("media", {
  id: int("id").autoincrement().primaryKey(),
  /** Original filename */
  filename: varchar("filename", { length: 255 }).notNull(),
  /** S3 object key (path in bucket) */
  s3Key: varchar("s3Key", { length: 500 }).notNull().unique(),
  /** Public URL to access the file (original) */
  url: varchar("url", { length: 1000 }).notNull(),
  /** Thumbnail URL (300x300) */
  thumbnailUrl: varchar("thumbnailUrl", { length: 1000 }),
  /** Medium size URL (800x800) */
  mediumUrl: varchar("mediumUrl", { length: 1000 }),
  /** Large size URL (1920x1920) */
  largeUrl: varchar("largeUrl", { length: 1000 }),
  /** MIME type (e.g., "image/jpeg", "image/png") */
  mimeType: varchar("mimeType", { length: 100 }).notNull(),
  /** File size in bytes */
  fileSize: int("fileSize").notNull(),
  /** Image width in pixels (null for non-images) */
  width: int("width"),
  /** Image height in pixels (null for non-images) */
  height: int("height"),
  /** Alt text for accessibility */
  altText: text("altText"),
  /** Optional caption */
  caption: text("caption"),
  /** User ID of the uploader */
  uploadedBy: int("uploadedBy").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Media = typeof media.$inferSelect;
export type InsertMedia = typeof media.$inferInsert;

/**
 * Push notification subscriptions table
 * Stores user push notification subscriptions for web push
 */
export const pushSubscriptions = mysqlTable("push_subscriptions", {
  id: int("id").autoincrement().primaryKey(),
  /** User ID from users table (nullable for anonymous subscriptions) */
  userId: int("userId"),
  /** Push subscription endpoint URL */
  endpoint: text("endpoint").notNull(),
  /** Push subscription keys (p256dh and auth) stored as JSON */
  keys: json("keys").notNull(),
  
  // Notification preferences stored as JSON
  preferences: json("preferences").notNull(),
  
  // Metadata
  userAgent: text("userAgent"),
  deviceType: varchar("deviceType", { length: 50 }), // 'ios', 'android', 'desktop'
  isActive: boolean("isActive").default(true).notNull(),
  
  // Timestamps
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastNotificationAt: timestamp("lastNotificationAt"),
});

export type PushSubscription = typeof pushSubscriptions.$inferSelect;
export type InsertPushSubscription = typeof pushSubscriptions.$inferInsert;

/**
 * Notification history table
 * Tracks sent notifications for analytics and debugging
 */
export const notificationHistory = mysqlTable("notification_history", {
  id: int("id").autoincrement().primaryKey(),
  subscriptionId: int("subscriptionId"),
  
  // Notification content
  title: varchar("title", { length: 255 }).notNull(),
  body: text("body").notNull(),
  icon: varchar("icon", { length: 500 }),
  badge: varchar("badge", { length: 500 }),
  data: json("data"), // Custom data payload
  
  // Notification metadata
  category: varchar("category", { length: 50 }), // 'case_study', 'event', 'assessment', 'general'
  clickUrl: varchar("clickUrl", { length: 1000 }),
  
  // Status
  status: mysqlEnum("status", ["pending", "sent", "failed", "clicked"]).default("pending").notNull(),
  errorMessage: text("errorMessage"),
  
  // Timestamps
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  sentAt: timestamp("sentAt"),
  clickedAt: timestamp("clickedAt"),
});

export type NotificationHistory = typeof notificationHistory.$inferSelect;
export type InsertNotificationHistory = typeof notificationHistory.$inferInsert;

/**
 * Leads table for gated resource downloads.
 * Captures contact information from users downloading federal solution guides.
 */
export const leads = mysqlTable("leads", {
  id: int("id").autoincrement().primaryKey(),
  /** Lead's full name */
  name: varchar("name", { length: 255 }).notNull(),
  /** Lead's email address */
  email: varchar("email", { length: 320 }).notNull(),
  /** Lead's company/organization */
  company: varchar("company", { length: 255 }),
  /** Lead's job title */
  jobTitle: varchar("jobTitle", { length: 255 }),
  /** Lead's phone number */
  phone: varchar("phone", { length: 50 }),
  /** Resource that was downloaded (e.g., "fedramp-readiness-checklist") */
  resource: varchar("resource", { length: 255 }).notNull(),
  /** Lead source/campaign tracking */
  source: varchar("source", { length: 255 }),
  /** Additional notes or comments from lead */
  notes: text("notes"),
  /** Lead status for CRM tracking */
  status: mysqlEnum("status", ["new", "contacted", "qualified", "converted", "unqualified"]).default("new").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Lead = typeof leads.$inferSelect;
export type InsertLead = typeof leads.$inferInsert;


/**
 * Job listings table for careers page.
 * Stores all job postings with details and requirements.
 */
export const jobs = mysqlTable("jobs", {
  id: int("id").autoincrement().primaryKey(),
  /** URL-friendly slug for the job posting */
  slug: varchar("slug", { length: 255 }).notNull().unique(),
  /** Job title */
  title: varchar("title", { length: 255 }).notNull(),
  /** Department (e.g., "Engineering", "Security", "Analytics") */
  department: varchar("department", { length: 100 }).notNull(),
  /** Job location (e.g., "Washington, DC", "Remote", "Washington, DC / Remote") */
  location: varchar("location", { length: 255 }).notNull(),
  /** Employment type (e.g., "Full-time", "Part-time", "Contract") */
  employmentType: varchar("employmentType", { length: 50 }).notNull(),
  /** Experience level (e.g., "Entry", "Mid", "Senior", "Lead", "Executive") */
  experienceLevel: varchar("experienceLevel", { length: 50 }).notNull(),
  /** Salary range (optional, e.g., "$120,000 - $160,000") */
  salaryRange: varchar("salaryRange", { length: 100 }),
  /** Short summary/excerpt */
  summary: text("summary").notNull(),
  /** Full job description (HTML from WYSIWYG editor) */
  description: text("description").notNull(),
  /** Requirements/qualifications (HTML from WYSIWYG editor) */
  requirements: text("requirements").notNull(),
  /** Nice-to-have qualifications (HTML from WYSIWYG editor) */
  niceToHave: text("niceToHave"),
  /** Benefits overview (HTML from WYSIWYG editor) */
  benefits: text("benefits"),
  /** Security clearance requirement (e.g., "None", "Secret", "Top Secret", "TS/SCI") */
  clearanceRequired: varchar("clearanceRequired", { length: 50 }).default("None"),
  /** Whether remote work is allowed */
  remoteAllowed: boolean("remoteAllowed").default(false),
  /** Application deadline (optional) */
  applicationDeadline: timestamp("applicationDeadline"),
  /** Publication status */
  status: mysqlEnum("status", ["draft", "published", "closed", "archived"]).default("draft").notNull(),
  /** User ID of the creator */
  createdBy: int("createdBy"),
  publishedAt: timestamp("publishedAt"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Job = typeof jobs.$inferSelect;
export type InsertJob = typeof jobs.$inferInsert;

/**
 * Job applications table.
 * Stores all job applications submitted through the careers page.
 */
export const jobApplications = mysqlTable("job_applications", {
  id: int("id").autoincrement().primaryKey(),
  /** Reference to the job being applied for */
  jobId: int("jobId").notNull(),
  /** Applicant's first name */
  firstName: varchar("firstName", { length: 100 }).notNull(),
  /** Applicant's last name */
  lastName: varchar("lastName", { length: 100 }).notNull(),
  /** Applicant's email address */
  email: varchar("email", { length: 320 }).notNull(),
  /** Applicant's phone number */
  phone: varchar("phone", { length: 50 }),
  /** LinkedIn profile URL */
  linkedinUrl: varchar("linkedinUrl", { length: 500 }),
  /** Portfolio/personal website URL */
  portfolioUrl: varchar("portfolioUrl", { length: 500 }),
  /** Resume file S3 key */
  resumeS3Key: varchar("resumeS3Key", { length: 500 }).notNull(),
  /** Resume file URL */
  resumeUrl: varchar("resumeUrl", { length: 1000 }).notNull(),
  /** Cover letter text (optional) */
  coverLetter: text("coverLetter"),
  /** How did you hear about us? */
  referralSource: varchar("referralSource", { length: 255 }),
  /** Current work authorization status */
  workAuthorization: varchar("workAuthorization", { length: 100 }),
  /** Willing to relocate? */
  willingToRelocate: boolean("willingToRelocate").default(false),
  /** Expected salary */
  expectedSalary: varchar("expectedSalary", { length: 100 }),
  /** Available start date */
  availableStartDate: varchar("availableStartDate", { length: 100 }),
  /** Additional notes/comments */
  additionalNotes: text("additionalNotes"),
  /** Application status */
  status: mysqlEnum("status", ["new", "reviewing", "phone_screen", "interview", "offer", "hired", "rejected", "withdrawn"]).default("new").notNull(),
  /** Internal notes from recruiters (not visible to applicant) */
  internalNotes: text("internalNotes"),
  /** User ID if applicant is logged in (optional) */
  userId: int("userId"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type JobApplication = typeof jobApplications.$inferSelect;
export type InsertJobApplication = typeof jobApplications.$inferInsert;
