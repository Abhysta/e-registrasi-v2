-- CreateTable
CREATE TABLE `register_pelatihan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fullName` VARCHAR(191) NOT NULL,
    `firstTitle` VARCHAR(191) NOT NULL,
    `endTitle` VARCHAR(191) NOT NULL,
    `NIP` VARCHAR(191) NOT NULL,
    `placeBirth` VARCHAR(191) NOT NULL,
    `dateBirth` DATETIME(3) NOT NULL,
    `religion` VARCHAR(191) NOT NULL,
    `golongan` VARCHAR(191) NOT NULL,
    `jabatan` VARCHAR(191) NOT NULL,
    `unitKerja` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `nomorSuratTugas` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `training` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `namaPelatihan` VARCHAR(191) NOT NULL,
    `tanggalMulai` DATETIME(3) NOT NULL,
    `tanggalBerakhir` DATETIME(3) NOT NULL,
    `registerPelatihanId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `training` ADD CONSTRAINT `training_registerPelatihanId_fkey` FOREIGN KEY (`registerPelatihanId`) REFERENCES `register_pelatihan`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
