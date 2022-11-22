/*
  Warnings:

  - You are about to drop the column `acievements` on the `Experience` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Experience" DROP COLUMN "acievements",
ADD COLUMN     "achievements" TEXT[],
ALTER COLUMN "responsibilities" SET NOT NULL,
ALTER COLUMN "responsibilities" SET DATA TYPE TEXT;
