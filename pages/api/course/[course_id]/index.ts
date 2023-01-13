import CourseServerApi from "@providers/serverApi/courseServerApi";
import { NextApiRequest, NextApiResponse } from "next";

export default async function courseHandler(req: NextApiRequest, res: NextApiResponse) {
	const courseServerApi = new CourseServerApi();

	switch (req.method) {
		case "GET": {
			const course = await courseServerApi.getOne(
				parseInt(req.query.course_id as string)
			);
			res.json(course);
			break;
		}

		case "PUT": {
			const course = await courseServerApi.update(
				parseInt(req.query.course_id as string),
				req.body
			);
			res.json(course);
			break;
		}

		case "DELETE": {
			const course = await courseServerApi.delete(
				parseInt(req.query.course_id as string)
			);
			res.json(course);
			break;
		}

		default:
			res.json({ error: "not supported method" });
	}
}
