CREATE TABLE `saved_searches` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`name` varchar(255) NOT NULL,
	`searchQuery` varchar(255) DEFAULT '',
	`industry` varchar(100) DEFAULT 'All',
	`service` varchar(100) DEFAULT 'All',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `saved_searches_id` PRIMARY KEY(`id`)
);
