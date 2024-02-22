-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(100) NOT NULL,
    `nama` VARCHAR(100) NOT NULL,
    `password` VARCHAR(100) NOT NULL,
    `role` INTEGER NOT NULL DEFAULT 0,
    `penyelenggara_layanan_id` INTEGER NULL,
    `token` VARCHAR(100) NULL,

    UNIQUE INDEX `users_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
