-- CreateTable
CREATE TABLE "province" (
    "id" SMALLSERIAL NOT NULL,
    "title" VARCHAR(30) NOT NULL,

    CONSTRAINT "province_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "city" (
    "id" SMALLSERIAL NOT NULL,
    "title" VARCHAR(30) NOT NULL,
    "provinceId" SMALLINT NOT NULL,

    CONSTRAINT "city_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "firstName" VARCHAR(30) NOT NULL,
    "lastName" VARCHAR(30) NOT NULL,
    "username" VARCHAR(30) NOT NULL,
    "phone" VARCHAR(10) NOT NULL,
    "email" VARCHAR(70) NOT NULL,
    "password" VARCHAR(30) NOT NULL,
    "permissionLevel" SMALLINT NOT NULL DEFAULT 0,
    "RegisterDate" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "cityId" SMALLINT,
    "interestsID" INTEGER[],
    "subCategoryId" SMALLINT,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "category" (
    "id" SMALLSERIAL NOT NULL,
    "title" VARCHAR(30) NOT NULL,

    CONSTRAINT "category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "subCategory" (
    "id" SMALLSERIAL NOT NULL,
    "title" VARCHAR(30) NOT NULL,
    "categoryId" SMALLINT NOT NULL,

    CONSTRAINT "subCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "keyword" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(30) NOT NULL,

    CONSTRAINT "keyword_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "course" (
    "id" SMALLSERIAL NOT NULL,
    "title" VARCHAR(30) NOT NULL,
    "description" TEXT NOT NULL,
    "bannerUrl" TEXT NOT NULL,
    "authorId" INTEGER NOT NULL,
    "categoryId" SMALLINT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT false,
    "creationDate" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateDate" DATE,
    "price" INTEGER,

    CONSTRAINT "course_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "lesson" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(30) NOT NULL,
    "description" TEXT NOT NULL,
    "bannerUrl" TEXT NOT NULL,
    "videoUrl" TEXT NOT NULL,
    "courseId" INTEGER NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT false,
    "creationDate" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateDate" DATE,

    CONSTRAINT "lesson_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "post" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(30) NOT NULL,
    "description" TEXT NOT NULL,
    "bannerUrl" TEXT NOT NULL,
    "authorId" INTEGER NOT NULL,
    "categoryId" SMALLINT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT false,
    "creationDate" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateDate" DATE,

    CONSTRAINT "post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "news" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(30) NOT NULL,
    "description" TEXT NOT NULL,
    "bannerUrl" TEXT NOT NULL,
    "authorId" INTEGER NOT NULL,
    "categoryId" SMALLINT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT false,
    "creationDate" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateDate" DATE,

    CONSTRAINT "news_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "adminMessage" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(30) NOT NULL,
    "description" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "isReaded" BOOLEAN NOT NULL DEFAULT false,
    "creationDate" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "adminMessage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "courseComment" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "courseId" SMALLINT NOT NULL,
    "userId" INTEGER NOT NULL,
    "creationDate" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "courseComment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "lessonComment" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "lessonId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "creationDate" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "lessonComment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "postComment" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "postId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "creationDate" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "postComment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "newsComment" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "newsId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "creationDate" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "newsComment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "postReport" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "postId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "creationDate" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "postReport_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_keywordTolesson" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_keywordTopost" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_keywordTonews" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_courseTokeyword" (
    "A" SMALLINT NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "user_username_key" ON "user"("username");

-- CreateIndex
CREATE UNIQUE INDEX "user_phone_key" ON "user"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "_keywordTolesson_AB_unique" ON "_keywordTolesson"("A", "B");

-- CreateIndex
CREATE INDEX "_keywordTolesson_B_index" ON "_keywordTolesson"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_keywordTopost_AB_unique" ON "_keywordTopost"("A", "B");

-- CreateIndex
CREATE INDEX "_keywordTopost_B_index" ON "_keywordTopost"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_keywordTonews_AB_unique" ON "_keywordTonews"("A", "B");

-- CreateIndex
CREATE INDEX "_keywordTonews_B_index" ON "_keywordTonews"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_courseTokeyword_AB_unique" ON "_courseTokeyword"("A", "B");

-- CreateIndex
CREATE INDEX "_courseTokeyword_B_index" ON "_courseTokeyword"("B");

-- AddForeignKey
ALTER TABLE "city" ADD CONSTRAINT "city_provinceId_fkey" FOREIGN KEY ("provinceId") REFERENCES "province"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "city"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_subCategoryId_fkey" FOREIGN KEY ("subCategoryId") REFERENCES "subCategory"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "subCategory" ADD CONSTRAINT "subCategory_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "course" ADD CONSTRAINT "course_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "course" ADD CONSTRAINT "course_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "subCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lesson" ADD CONSTRAINT "lesson_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "post" ADD CONSTRAINT "post_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "post" ADD CONSTRAINT "post_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "subCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "news" ADD CONSTRAINT "news_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "subCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "news" ADD CONSTRAINT "news_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "adminMessage" ADD CONSTRAINT "adminMessage_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "courseComment" ADD CONSTRAINT "courseComment_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "courseComment" ADD CONSTRAINT "courseComment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lessonComment" ADD CONSTRAINT "lessonComment_lessonId_fkey" FOREIGN KEY ("lessonId") REFERENCES "lesson"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lessonComment" ADD CONSTRAINT "lessonComment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "postComment" ADD CONSTRAINT "postComment_postId_fkey" FOREIGN KEY ("postId") REFERENCES "post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "postComment" ADD CONSTRAINT "postComment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "newsComment" ADD CONSTRAINT "newsComment_newsId_fkey" FOREIGN KEY ("newsId") REFERENCES "news"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "newsComment" ADD CONSTRAINT "newsComment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "postReport" ADD CONSTRAINT "postReport_postId_fkey" FOREIGN KEY ("postId") REFERENCES "post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "postReport" ADD CONSTRAINT "postReport_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_keywordTolesson" ADD CONSTRAINT "_keywordTolesson_A_fkey" FOREIGN KEY ("A") REFERENCES "keyword"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_keywordTolesson" ADD CONSTRAINT "_keywordTolesson_B_fkey" FOREIGN KEY ("B") REFERENCES "lesson"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_keywordTopost" ADD CONSTRAINT "_keywordTopost_A_fkey" FOREIGN KEY ("A") REFERENCES "keyword"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_keywordTopost" ADD CONSTRAINT "_keywordTopost_B_fkey" FOREIGN KEY ("B") REFERENCES "post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_keywordTonews" ADD CONSTRAINT "_keywordTonews_A_fkey" FOREIGN KEY ("A") REFERENCES "keyword"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_keywordTonews" ADD CONSTRAINT "_keywordTonews_B_fkey" FOREIGN KEY ("B") REFERENCES "news"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_courseTokeyword" ADD CONSTRAINT "_courseTokeyword_A_fkey" FOREIGN KEY ("A") REFERENCES "course"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_courseTokeyword" ADD CONSTRAINT "_courseTokeyword_B_fkey" FOREIGN KEY ("B") REFERENCES "keyword"("id") ON DELETE CASCADE ON UPDATE CASCADE;
