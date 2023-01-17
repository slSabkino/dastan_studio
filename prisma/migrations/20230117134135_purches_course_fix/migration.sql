/*
  Warnings:

  - You are about to drop the `_buyer` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_buyer" DROP CONSTRAINT "_buyer_A_fkey";

-- DropForeignKey
ALTER TABLE "_buyer" DROP CONSTRAINT "_buyer_B_fkey";

-- DropTable
DROP TABLE "_buyer";

-- CreateTable
CREATE TABLE "_PurchasedCourses" (
    "A" SMALLINT NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_PurchasedCourses_AB_unique" ON "_PurchasedCourses"("A", "B");

-- CreateIndex
CREATE INDEX "_PurchasedCourses_B_index" ON "_PurchasedCourses"("B");

-- AddForeignKey
ALTER TABLE "_PurchasedCourses" ADD CONSTRAINT "_PurchasedCourses_A_fkey" FOREIGN KEY ("A") REFERENCES "course"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PurchasedCourses" ADD CONSTRAINT "_PurchasedCourses_B_fkey" FOREIGN KEY ("B") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
