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
    "province_id" SMALLINT NOT NULL,

    CONSTRAINT "city_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "first_name" VARCHAR(30) NOT NULL,
    "last_name" VARCHAR(30) NOT NULL,
    "username" VARCHAR(30) NOT NULL,
    "phone" SMALLINT NOT NULL,
    "permission_level" SMALLINT NOT NULL DEFAULT 0,
    "RegisterDate" DATE NOT NULL,
    "email" VARCHAR(70),
    "city_id" SMALLINT,

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
    "category_id" SMALLINT NOT NULL,

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
    "banner_url" TEXT NOT NULL,
    "author_id" INTEGER NOT NULL,
    "category_id" SMALLINT NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT false,
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
    "banner_url" TEXT NOT NULL,
    "video_url" TEXT NOT NULL,
    "author_id" INTEGER NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT false,
    "creationDate" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateDate" DATE,

    CONSTRAINT "lesson_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "post" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(30) NOT NULL,
    "description" TEXT NOT NULL,
    "banner_url" TEXT NOT NULL,
    "author_id" INTEGER NOT NULL,
    "category_id" SMALLINT NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT false,
    "creationDate" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateDate" DATE,

    CONSTRAINT "post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "news" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(30) NOT NULL,
    "description" TEXT NOT NULL,
    "banner_url" TEXT NOT NULL,
    "author_id" INTEGER NOT NULL,
    "category_id" SMALLINT NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT false,
    "creationDate" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateDate" DATE,

    CONSTRAINT "news_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "admin_message" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(30) NOT NULL,
    "description" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,
    "is_readed" BOOLEAN NOT NULL DEFAULT false,
    "creationDate" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "admin_message_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "courseComment" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "course_id" SMALLINT NOT NULL,
    "user_id" INTEGER NOT NULL,
    "creationDate" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "courseComment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "lessonComment" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "lesson_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "creationDate" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "lessonComment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "postComment" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "post_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "creationDate" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "postComment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "newsComment" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "news_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "creationDate" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "newsComment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "postReport" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "post_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "creationDate" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "postReport_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_subCategoryTouser" (
    "A" SMALLINT NOT NULL,
    "B" INTEGER NOT NULL
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
CREATE UNIQUE INDEX "_subCategoryTouser_AB_unique" ON "_subCategoryTouser"("A", "B");

-- CreateIndex
CREATE INDEX "_subCategoryTouser_B_index" ON "_subCategoryTouser"("B");

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
ALTER TABLE "city" ADD CONSTRAINT "city_province_id_fkey" FOREIGN KEY ("province_id") REFERENCES "province"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_city_id_fkey" FOREIGN KEY ("city_id") REFERENCES "city"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "subCategory" ADD CONSTRAINT "subCategory_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "course" ADD CONSTRAINT "course_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "course" ADD CONSTRAINT "course_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "subCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lesson" ADD CONSTRAINT "lesson_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "post" ADD CONSTRAINT "post_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "post" ADD CONSTRAINT "post_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "subCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "news" ADD CONSTRAINT "news_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "subCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "news" ADD CONSTRAINT "news_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "admin_message" ADD CONSTRAINT "admin_message_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "courseComment" ADD CONSTRAINT "courseComment_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "courseComment" ADD CONSTRAINT "courseComment_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lessonComment" ADD CONSTRAINT "lessonComment_lesson_id_fkey" FOREIGN KEY ("lesson_id") REFERENCES "lesson"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lessonComment" ADD CONSTRAINT "lessonComment_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "postComment" ADD CONSTRAINT "postComment_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "postComment" ADD CONSTRAINT "postComment_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "newsComment" ADD CONSTRAINT "newsComment_news_id_fkey" FOREIGN KEY ("news_id") REFERENCES "news"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "newsComment" ADD CONSTRAINT "newsComment_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "postReport" ADD CONSTRAINT "postReport_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "postReport" ADD CONSTRAINT "postReport_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_subCategoryTouser" ADD CONSTRAINT "_subCategoryTouser_A_fkey" FOREIGN KEY ("A") REFERENCES "subCategory"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_subCategoryTouser" ADD CONSTRAINT "_subCategoryTouser_B_fkey" FOREIGN KEY ("B") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

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
