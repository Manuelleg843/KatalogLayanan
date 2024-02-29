/*
  Warnings:

  - Added the required column `no_telp` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `users` ADD COLUMN `no_telp` VARCHAR(100) NOT NULL;
