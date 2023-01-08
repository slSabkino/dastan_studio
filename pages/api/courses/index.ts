import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function courseApi(req: NextApiRequest, res: NextApiResponse) {
	switch (req.method) {
		case "GET": {
			const users = await getAllCourses();
			console.log("get user : ", users);
			res.json(users);
			break;
		}

		default:
			res.json({ err: "not supported method" });
	}
}

async function getAllCourses() {
	try {
		const courses = await prisma.course.findMany();
		return courses;
	} catch (error) {
		return { err: "some error on get courses" };
	}
}
