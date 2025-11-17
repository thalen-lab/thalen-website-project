import { int, mysqlEnum, mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";

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
