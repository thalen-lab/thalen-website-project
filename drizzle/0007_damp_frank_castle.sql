ALTER TABLE `blog_posts` MODIFY COLUMN `status` enum('draft','published','archived','scheduled') NOT NULL DEFAULT 'draft';--> statement-breakpoint
ALTER TABLE `case_studies` MODIFY COLUMN `status` enum('draft','published','archived','scheduled') NOT NULL DEFAULT 'draft';--> statement-breakpoint
ALTER TABLE `events` MODIFY COLUMN `status` enum('upcoming','ongoing','completed','cancelled','scheduled') NOT NULL DEFAULT 'upcoming';--> statement-breakpoint
ALTER TABLE `blog_posts` ADD `scheduledPublishAt` timestamp;--> statement-breakpoint
ALTER TABLE `case_studies` ADD `scheduledPublishAt` timestamp;--> statement-breakpoint
ALTER TABLE `events` ADD `scheduledPublishAt` timestamp;