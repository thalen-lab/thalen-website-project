CREATE TABLE `methodology_assessments` (
	`id` int AUTO_INCREMENT NOT NULL,
	`agencyName` varchar(255) NOT NULL,
	`contactName` varchar(255) NOT NULL,
	`email` varchar(320) NOT NULL,
	`phone` varchar(50),
	`authStatus` varchar(100) NOT NULL,
	`complianceFramework` varchar(100) NOT NULL,
	`details` text,
	`status` enum('new','contacted','qualified','converted','closed') NOT NULL DEFAULT 'new',
	`internalNotes` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `methodology_assessments_id` PRIMARY KEY(`id`)
);
