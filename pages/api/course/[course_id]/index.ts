import CourseServerApi from "@providers/serverApi/courseServerApi";
import { NextApiRequest, NextApiResponse } from "next";

const courseServerApi = new CourseServerApi();

export default async function courseHandler(req: NextApiRequest, res: NextApiResponse) {
	switch (req.method) {
		case "GET": {
			const course = await courseServerApi.getOne(
				parseInt(req.query.course_id as string)
			);
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
