/*
  Warnings:

  - A unique constraint covering the columns `[kodePelatihan]` on the table `training` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `training_kodePelatihan_key` ON `training`(`kodePelatihan`);
