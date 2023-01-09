/*
  Warnings:

  - You are about to drop the column `interestsID` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `subCategoryId` on the `user` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "user" DROP CONSTRAINT "user_subCategoryId_fkey";

-- AlterTable
ALTER TABLE "user" DROP COLUMN "interestsID",
DROP COLUMN "subCategoryId";

-- CreateTable
CREATE TABLE "_subCategoryTouser" (
    "A" SMALLINT NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_subCategoryTouser_AB_unique" ON "_subCategoryTouser"("A", "B");

-- CreateIndex
CREATE INDEX "_subCategoryTouser_B_index" ON "_subCategoryTouser"("B");

-- AddForeignKey
ALTER TABLE "_subCategoryTouser" ADD CONSTRAINT "_subCategoryTouser_A_fkey" FOREIGN KEY ("A") REFERENCES "subCategory"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_subCategoryTouser" ADD CONSTRAINT "_subCategoryTouser_B_fkey" FOREIGN KEY ("B") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
