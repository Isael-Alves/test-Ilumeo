/*
  Warnings:

  - Added the required column `Date` to the `Historic` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Historic" ADD COLUMN     "Date" TIMESTAMP(4) NOT NULL;
