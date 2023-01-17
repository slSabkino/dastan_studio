import CoursePrismaProvider from "@providers/prismaProvider/coursePrismaProvider";
import { NextApiRequest, NextApiResponse } from "next";

export default async function apiHandler(req: NextApiRequest, res: NextApiResponse) {
	const coursePrismaProvider = new CoursePrismaProvider();

	switch (req.method) {
		case "PUT": {
			const courses = await coursePrismaProvider.getSome(req.body);
			res.json(courses);
			break;
		}

		case "POST": {
			const course = await coursePrismaProvider.create(req.body);
			res.json(course);
			break;
		}

		default:
			res.json({ error: "not supported method" });
	}
}
