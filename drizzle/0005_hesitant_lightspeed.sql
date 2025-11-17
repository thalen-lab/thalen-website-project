CREATE TABLE `media` (
	`id` int AUTO_INCREMENT NOT NULL,
	`filename` varchar(255) NOT NULL,
	`s3Key` varchar(500) NOT NULL,
	`url` varchar(1000) NOT NULL,
	`mimeType` varchar(100) NOT NULL,
	`fileSize` int NOT NULL,
	`width` int,
	`height` int,
	`altText` text,
	`caption` text,
	`uploadedBy` int NOT NULL,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `media_id` PRIMARY KEY(`id`),
	CONSTRAINT `media_s3Key_unique` UNIQUE(`s3Key`)
);
