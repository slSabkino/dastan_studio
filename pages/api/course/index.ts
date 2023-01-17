import CourseServerApi from "@providers/serverApi/courseServerApi";
import { NextApiRequest, NextApiResponse } from "next";

export default async function apiHandler(req: NextApiRequest, res: NextApiResponse) {
	const courseServerApi = new CourseServerApi();

	switch (req.method) {
		case "PUT": {
			const courses = await courseServerApi.getSome(req.body);
			res.json(courses);
			break;
		}

		case "POST": {
			const course = await courseServerApi.create(req.body);
			res.json(course);
			break;
		}

		default:
			res.json({ error: "not supported method" });
	}
}
