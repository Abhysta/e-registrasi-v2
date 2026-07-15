/*
  Warnings:

  - You are about to drop the column `registerPelatihanId` on the `training` table. All the data in the column will be lost.
  - Added the required column `id_training` to the `register_pelatihan` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `training` DROP FOREIGN KEY `training_registerPelatihanId_fkey`;

-- DropIndex
DROP INDEX `training_registerPelatihanId_fkey` ON `training`;

-- AlterTable
ALTER TABLE `register_pelatihan` ADD COLUMN `id_training` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `training` DROP COLUMN `registerPelatihanId`;

-- AddForeignKey
ALTER TABLE `register_pelatihan` ADD CONSTRAINT `register_pelatihan_id_training_fkey` FOREIGN KEY (`id_training`) REFERENCES `training`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
