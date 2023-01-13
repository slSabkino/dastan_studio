import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function apiHandler(req: NextApiRequest, res: NextApiResponse) {
	switch (req.method) {
		case "GET": {
			const lesson = await getOneLesson(parseInt(req.query.lesson_id as string));
			console.log("get lesson : ", lesson);
			res.json(lesson);
			break;
		}

		default:
			res.json({ err: "not supported method" });
	}
}

async function getOneLesson(lessonId: number) {
	try {
		const lesson = await prisma.lesson.findUnique({
			where: { id: lessonId },
			select: { title: true, description: true, bannerUrl: true },
		});

		console.log("get lesson : ", lesson);

		return lesson;
	} catch (error) {
		return { error: "some error on get lesson" };
	}
}
