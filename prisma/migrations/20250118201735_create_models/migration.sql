/*
  Warnings:

  - You are about to drop the column `balnce` on the `accounts` table. All the data in the column will be lost.
  - You are about to drop the column `nextReccuringDate` on the `transactions` table. All the data in the column will be lost.
  - The `recurringInterval` column on the `transactions` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[userId]` on the table `budgets` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `category` to the `transactions` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "RecurringInterval" AS ENUM ('DAILY', 'WEEKLY', 'MONTHLY', 'YEARLY');

-- DropForeignKey
ALTER TABLE "budgets" DROP CONSTRAINT "budgets_userId_fkey";

-- AlterTable
ALTER TABLE "accounts" DROP COLUMN "balnce",
ADD COLUMN     "balance" DECIMAL(65,30) NOT NULL DEFAULT 0,
ALTER COLUMN "isDefault" SET DEFAULT false;

-- AlterTable
ALTER TABLE "transactions" DROP COLUMN "nextReccuringDate",
ADD COLUMN     "category" TEXT NOT NULL,
ADD COLUMN     "nextRecurringDate" TIMESTAMP(3),
DROP COLUMN "recurringInterval",
ADD COLUMN     "recurringInterval" "RecurringInterval";

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "name" TEXT;

-- DropEnum
DROP TYPE "RecurringInterVal";

-- CreateIndex
CREATE UNIQUE INDEX "budgets_userId_key" ON "budgets"("userId");

-- AddForeignKey
ALTER TABLE "budgets" ADD CONSTRAINT "budgets_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
