-- CreateTable
CREATE TABLE `Grupos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `uuid_grupo` VARCHAR(191) NOT NULL,
    `limit` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `count_users` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Chatgpt` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `uuid` VARCHAR(191) NOT NULL,
    `cookie_chatgpt` VARCHAR(191) NOT NULL,
    `ia_name` VARCHAR(191) NOT NULL,
    `uuid_grupo` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
