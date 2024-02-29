/*
  Warnings:

  - You are about to drop the column `komponen_layanan_id` on the `kelompok_komponen_layanan` table. All the data in the column will be lost.
  - Added the required column `kelompok_komponen_id` to the `komponen_layanan` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `kelompok_komponen_layanan` DROP FOREIGN KEY `kelompok_komponen_layanan_komponen_layanan_id_fkey`;

-- AlterTable
ALTER TABLE `kelompok_komponen_layanan` DROP COLUMN `komponen_layanan_id`;

-- AlterTable
ALTER TABLE `komponen_layanan` ADD COLUMN `kelompok_komponen_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `penyelenggara_layanan` MODIFY `email` VARCHAR(100) NULL,
    MODIFY `telp` VARCHAR(100) NULL,
    MODIFY `deskripsi` TEXT NULL;

-- AlterTable
ALTER TABLE `standar_layanan` MODIFY `persyaratan` TEXT NULL,
    MODIFY `sistem_mekanisme_dan_prosedur` TEXT NULL,
    MODIFY `jangka_waktu_pelayanan` VARCHAR(100) NULL,
    MODIFY `biaya_tarif` VARCHAR(100) NULL,
    MODIFY `produk_layanan` TEXT NULL,
    MODIFY `penanganan_pengaduan_saran_masukan` TEXT NULL,
    MODIFY `dasar_hukum` TEXT NULL,
    MODIFY `sarana_prasarana_fasilitas` TEXT NULL,
    MODIFY `kopetensi_pelaksana` TEXT NULL,
    MODIFY `pengawasan_internal` VARCHAR(100) NULL,
    MODIFY `jumlah_pelaksana` VARCHAR(100) NULL,
    MODIFY `jaminan_pelayanan` TEXT NULL,
    MODIFY `jaminan_keamanan_keselamatan_pelayanan` TEXT NULL,
    MODIFY `evaluasi_kinerja_pelaksana` TEXT NULL,
    MODIFY `gambar` VARCHAR(100) NULL,
    MODIFY `link` VARCHAR(100) NULL;

-- AddForeignKey
ALTER TABLE `komponen_layanan` ADD CONSTRAINT `komponen_layanan_kelompok_komponen_id_fkey` FOREIGN KEY (`kelompok_komponen_id`) REFERENCES `kelompok_komponen_layanan`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
