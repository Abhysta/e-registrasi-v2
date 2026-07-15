/*
  Warnings:

  - The primary key for the `training` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE `register_pelatihan` DROP FOREIGN KEY `register_pelatihan_id_training_fkey`;

-- DropIndex
DROP INDEX `register_pelatihan_id_training_fkey` ON `register_pelatihan`;

-- AlterTable
ALTER TABLE `register_pelatihan` MODIFY `id_training` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `training` DROP PRIMARY KEY,
    ADD PRIMARY KEY (`id`, `kodePelatihan`);

-- AddForeignKey
ALTER TABLE `register_pelatihan` ADD CONSTRAINT `register_pelatihan_id_training_fkey` FOREIGN KEY (`id_training`) REFERENCES `training`(`kodePelatihan`) ON DELETE RESTRICT ON UPDATE CASCADE;
