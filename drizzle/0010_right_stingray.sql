CREATE TABLE `notification_history` (
	`id` int AUTO_INCREMENT NOT NULL,
	`subscriptionId` int,
	`title` varchar(255) NOT NULL,
	`body` text NOT NULL,
	`icon` varchar(500),
	`badge` varchar(500),
	`data` json,
	`category` varchar(50),
	`clickUrl` varchar(1000),
	`status` enum('pending','sent','failed','clicked') NOT NULL DEFAULT 'pending',
	`errorMessage` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`sentAt` timestamp,
	`clickedAt` timestamp,
	CONSTRAINT `notification_history_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `push_subscriptions` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int,
	`endpoint` text NOT NULL,
	`keys` json NOT NULL,
	`preferences` json NOT NULL,
	`userAgent` text,
	`deviceType` varchar(50),
	`isActive` boolean NOT NULL DEFAULT true,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	`lastNotificationAt` timestamp,
	CONSTRAINT `push_subscriptions_id` PRIMARY KEY(`id`)
);
