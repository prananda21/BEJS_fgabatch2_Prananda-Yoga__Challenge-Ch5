/*
  Warnings:

  - You are about to drop the column `type` on the `addresses` table. All the data in the column will be lost.
  - Added the required column `address_type` to the `addresses` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "addresses" DROP CONSTRAINT "addresses_type_fkey";

-- AlterTable
ALTER TABLE "addresses" DROP COLUMN "type",
ADD COLUMN     "address_type" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "addresses" ADD CONSTRAINT "addresses_address_type_fkey" FOREIGN KEY ("address_type") REFERENCES "address_type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
