import CourseServerApi from "@providers/serverApi/courseServerApi";
import { NextApiRequest, NextApiResponse } from "next";

export default async function lessonApiID(req: NextApiRequest, res: NextApiResponse) {
	const courseServerApi = new CourseServerApi();

	switch (req.method) {
		case "GET": {
			const courses = await courseServerApi.getSome(
				parseInt(req.query.skip as string),
				parseInt(req.query.take as string)
			);
			res.json(courses);
			break;
		}

		default:
			res.json({ error: "not supported method" });
	}
}
