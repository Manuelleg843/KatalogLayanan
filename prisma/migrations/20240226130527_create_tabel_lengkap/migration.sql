-- CreateTable
CREATE TABLE `standar_layanan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_layanan` VARCHAR(100) NOT NULL,
    `persyaratan` TEXT NOT NULL,
    `sistem_mekanisme_dan_prosedur` TEXT NOT NULL,
    `jangka_waktu_pelayanan` VARCHAR(100) NOT NULL,
    `biaya_tarif` VARCHAR(100) NOT NULL,
    `produk_layanan` TEXT NOT NULL,
    `penanganan_pengaduan_saran_masukan` TEXT NOT NULL,
    `dasar_hukum` TEXT NOT NULL,
    `sarana_prasarana_fasilitas` TEXT NOT NULL,
    `kopetensi_pelaksana` TEXT NOT NULL,
    `pengawasan_internal` VARCHAR(100) NOT NULL,
    `jumlah_pelaksana` VARCHAR(100) NOT NULL,
    `jaminan_pelayanan` TEXT NOT NULL,
    `jaminan_keamanan_keselamatan_pelayanan` TEXT NOT NULL,
    `evaluasi_kinerja_pelaksana` TEXT NOT NULL,
    `gambar` VARCHAR(100) NOT NULL,
    `link` VARCHAR(100) NOT NULL,
    `penyelenggara_layanan_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `roles` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `role` VARCHAR(100) NOT NULL,
    `deskripsi` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `permission` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `hak_akses` VARCHAR(100) NOT NULL,
    `deskripsi` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `role_has_permission` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `role_id` INTEGER NOT NULL,
    `permission_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `komponen_layanan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_komponen` VARCHAR(100) NOT NULL,
    `deskripsi` TEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `kelompok_komponen_layanan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_kelompok` VARCHAR(100) NOT NULL,
    `komponen_layanan_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `standar_layanan` ADD CONSTRAINT `standar_layanan_penyelenggara_layanan_id_fkey` FOREIGN KEY (`penyelenggara_layanan_id`) REFERENCES `penyelenggara_layanan`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `role_has_permission` ADD CONSTRAINT `role_has_permission_role_id_fkey` FOREIGN KEY (`role_id`) REFERENCES `roles`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `role_has_permission` ADD CONSTRAINT `role_has_permission_permission_id_fkey` FOREIGN KEY (`permission_id`) REFERENCES `permission`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `kelompok_komponen_layanan` ADD CONSTRAINT `kelompok_komponen_layanan_komponen_layanan_id_fkey` FOREIGN KEY (`komponen_layanan_id`) REFERENCES `komponen_layanan`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
