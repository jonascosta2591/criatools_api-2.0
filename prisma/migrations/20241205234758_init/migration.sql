-- CreateTable
CREATE TABLE `User` (
    `uuid` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `senha` VARCHAR(191) NOT NULL,
    `plano` VARCHAR(191) NOT NULL,
    `liberado` INTEGER NOT NULL,
    `uuid_grupo` VARCHAR(191) NOT NULL,
    `id_subscription` VARCHAR(191) NOT NULL,
    `customer_id` VARCHAR(191) NOT NULL,
    `asaas_data` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`uuid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
