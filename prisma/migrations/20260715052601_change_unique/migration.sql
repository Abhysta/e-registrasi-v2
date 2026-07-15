/*
  Warnings:

  - A unique constraint covering the columns `[kodePelatihan,NIP]` on the table `register_pelatihan` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `register_pelatihan_kodePelatihan_NIP_key` ON `register_pelatihan`(`kodePelatihan`, `NIP`);
