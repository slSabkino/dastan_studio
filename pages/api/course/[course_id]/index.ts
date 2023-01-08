import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function courseApiID(req: NextApiRequest, res: NextApiResponse) {
	switch (req.method) {
		case "GET": {
			const course = await getOneCourse(parseInt(req.query.course_id as string));
			if (course) {
				console.log("get course : ", course);
				res.json(course);
			} else {
				// res.status(404);
				res.json({ error: "course not found" });
			}

			break;
		}

		default:
			res.json({ err: "not supported method" });
	}
}

async function getOneCourse(courseId: number) {
	try {
		const course = await prisma.course.findUnique({
			where: { id: courseId },
			include: {
				lessons: { select: { title: true, id: true, bannerUrl: true } },
			},
		});

		console.log("get course : ", course);

		return course;
	} catch (error) {
		throw new Error("not such course");
		// return { err: "some error on get course", error };
	}
}
