-- AlterTable
ALTER TABLE "course" ADD COLUMN     "userId" INTEGER;

-- CreateTable
CREATE TABLE "_buyer" (
    "A" SMALLINT NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_buyer_AB_unique" ON "_buyer"("A", "B");

-- CreateIndex
CREATE INDEX "_buyer_B_index" ON "_buyer"("B");

-- AddForeignKey
ALTER TABLE "_buyer" ADD CONSTRAINT "_buyer_A_fkey" FOREIGN KEY ("A") REFERENCES "course"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_buyer" ADD CONSTRAINT "_buyer_B_fkey" FOREIGN KEY ("B") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
