import { PrismaClient } from "@prisma/client";
import { courseServerCreateBody } from "@propsTypes/coursesTypes";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function courseApi(req: NextApiRequest, res: NextApiResponse) {
	switch (req.method) {
		case "POST": {
			const user = await createCourse(req.body);
			console.log("create user : ", user);
			res.json(user);
			break;
		}

		case "GET": {
			const users = await getOneCourse(req.body.id);
			console.log("get user : ", users);
			res.json(users);
			break;
		}

		default:
			res.json({ err: "not supported method" });
	}
}

async function getOneCourse(courseId: number) {
	try {
		const course = await prisma.course.findFirst({
			where: { id: courseId },
		});
		return course;
	} catch (error) {
		return { err: "some error on get course" };
	}
}

async function createCourse(body: courseServerCreateBody) {
	try {
		const queryRes = await prisma.course.create({
			data: body,
		});
		console.log("courseInfo : ", queryRes);
		return queryRes;
	} catch (error: any) {
		console.log("courseErr : ", error.message);
		return { err: error.message };
		// return { err: "some error on create user" };
	}
}
