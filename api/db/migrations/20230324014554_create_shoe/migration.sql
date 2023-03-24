/*
  Warnings:

  - You are about to drop the column `colors` on the `Shoe` table. All the data in the column will be lost.
  - Added the required column `color` to the `Shoe` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Shoe" DROP COLUMN "colors",
ADD COLUMN     "color" TEXT NOT NULL;
