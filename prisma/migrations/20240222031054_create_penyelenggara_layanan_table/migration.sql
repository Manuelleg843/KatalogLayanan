-- CreateTable
CREATE TABLE `penyelenggara_layanan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama` VARCHAR(100) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `telp` VARCHAR(100) NOT NULL,

    UNIQUE INDEX `penyelenggara_layanan_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_penyelenggara_layanan_id_fkey` FOREIGN KEY (`penyelenggara_layanan_id`) REFERENCES `penyelenggara_layanan`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
