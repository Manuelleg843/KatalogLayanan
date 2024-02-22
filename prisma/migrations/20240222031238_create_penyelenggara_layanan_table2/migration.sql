/*
  Warnings:

  - Added the required column `deskripsi` to the `penyelenggara_layanan` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `penyelenggara_layanan` ADD COLUMN `deskripsi` TEXT NOT NULL;
