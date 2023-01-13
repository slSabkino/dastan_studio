/*
  Warnings:

  - You are about to drop the column `courseId` on the `courseComment` table. All the data in the column will be lost.
  - You are about to drop the column `lessonId` on the `lessonComment` table. All the data in the column will be lost.
  - You are about to drop the column `newsId` on the `newsComment` table. All the data in the column will be lost.
  - You are about to drop the column `postId` on the `postComment` table. All the data in the column will be lost.
  - You are about to drop the column `postId` on the `postReport` table. All the data in the column will be lost.
  - Added the required column `subjectId` to the `courseComment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subjectId` to the `lessonComment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subjectId` to the `newsComment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subjectId` to the `postComment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subjectId` to the `postReport` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "courseComment" DROP CONSTRAINT "courseComment_courseId_fkey";

-- DropForeignKey
ALTER TABLE "lessonComment" DROP CONSTRAINT "lessonComment_lessonId_fkey";

-- DropForeignKey
ALTER TABLE "newsComment" DROP CONSTRAINT "newsComment_newsId_fkey";

-- DropForeignKey
ALTER TABLE "postComment" DROP CONSTRAINT "postComment_postId_fkey";

-- DropForeignKey
ALTER TABLE "postReport" DROP CONSTRAINT "postReport_postId_fkey";

-- AlterTable
ALTER TABLE "courseComment" DROP COLUMN "courseId",
ADD COLUMN     "subjectId" SMALLINT NOT NULL;

-- AlterTable
ALTER TABLE "lessonComment" DROP COLUMN "lessonId",
ADD COLUMN     "subjectId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "newsComment" DROP COLUMN "newsId",
ADD COLUMN     "subjectId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "postComment" DROP COLUMN "postId",
ADD COLUMN     "subjectId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "postReport" DROP COLUMN "postId",
ADD COLUMN     "subjectId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "courseComment" ADD CONSTRAINT "courseComment_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lessonComment" ADD CONSTRAINT "lessonComment_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "lesson"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "postComment" ADD CONSTRAINT "postComment_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "newsComment" ADD CONSTRAINT "newsComment_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "news"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "postReport" ADD CONSTRAINT "postReport_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
