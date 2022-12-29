/*
  Warnings:

  - You are about to drop the column `subTotal` on the `Order` table. All the data in the column will be lost.
  - Added the required column `subtotal` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Order" DROP COLUMN "subTotal",
ADD COLUMN     "subtotal" DECIMAL(65,30) NOT NULL;
