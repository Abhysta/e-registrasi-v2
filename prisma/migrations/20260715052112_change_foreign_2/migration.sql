/*
  Warnings:

  - You are about to drop the column `id_training` on the `register_pelatihan` table. All the data in the column will be lost.
  - The primary key for the `training` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `kodePelatihan` to the `register_pelatihan` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `register_pelatihan` DROP FOREIGN KEY `register_pelatihan_id_training_fkey`;

-- DropIndex
DROP INDEX `register_pelatihan_id_training_fkey` ON `register_pelatihan`;

-- AlterTable
ALTER TABLE `register_pelatihan` DROP COLUMN `id_training`,
    ADD COLUMN `kodePelatihan` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `training` DROP PRIMARY KEY,
    ADD PRIMARY KEY (`id`);

-- AddForeignKey
ALTER TABLE `register_pelatihan` ADD CONSTRAINT `register_pelatihan_kodePelatihan_fkey` FOREIGN KEY (`kodePelatihan`) REFERENCES `training`(`kodePelatihan`) ON DELETE RESTRICT ON UPDATE CASCADE;
