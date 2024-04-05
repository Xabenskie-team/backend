/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `time_block` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "time_block" DROP CONSTRAINT "time_block_user_id_fkey";

-- DropTable
DROP TABLE "User";

-- DropTable
DROP TABLE "time_block";
