/*
  Warnings:

  - You are about to drop the column `title` on the `Link` table. All the data in the column will be lost.
  - You are about to drop the column `url` on the `Link` table. All the data in the column will be lost.
  - Added the required column `username` to the `Link` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Link" DROP COLUMN "title",
DROP COLUMN "url",
ADD COLUMN     "username" TEXT NOT NULL;
