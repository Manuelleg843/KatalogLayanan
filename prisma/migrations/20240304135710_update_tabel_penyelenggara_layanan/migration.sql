/*
  Warnings:

  - A unique constraint covering the columns `[nama]` on the table `penyelenggara_layanan` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `penyelenggara_layanan_nama_key` ON `penyelenggara_layanan`(`nama`);
