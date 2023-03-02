/*
  Warnings:

  - Changed the type of `startTime` on the `Historic` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `finishTime` on the `Historic` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Historic" DROP COLUMN "startTime",
ADD COLUMN     "startTime" TIME(4) NOT NULL,
DROP COLUMN "finishTime",
ADD COLUMN     "finishTime" TIME(4) NOT NULL;
