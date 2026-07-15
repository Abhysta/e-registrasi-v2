/*
  Warnings:

  - Added the required column `kodePelatihan` to the `training` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `training` ADD COLUMN `kodePelatihan` VARCHAR(191) NOT NULL;
