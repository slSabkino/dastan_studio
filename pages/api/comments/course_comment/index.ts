import { CourseCommntServerApi } from "@providers/serverApi/courseCommentServerApi";
import { NextApiRequest, NextApiResponse } from "next";

export default async function apiHandler(req: NextApiRequest, res: NextApiResponse) {
	const courseCommntServerApi = new CourseCommntServerApi();

	switch (req.method) {
		case "PUT": {
			const categories = await courseCommntServerApi.getSome(req.body);
			res.json(categories);
			break;
		}

		case "POST": {
			const category = await courseCommntServerApi.create(req.body);
			res.json(category);
			break;
		}

		default:
			res.json({ error: "not supported method" });
	}
}
