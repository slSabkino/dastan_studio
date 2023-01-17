import { CourseCommentPrismaProvider } from "@providers/prismaProvider/courseCommentPrismaProvider";
import { NextApiRequest, NextApiResponse } from "next";

export default async function apiHandler(req: NextApiRequest, res: NextApiResponse) {
	const courseCommentPrismaProvider = new CourseCommentPrismaProvider();

	switch (req.method) {
		case "PUT": {
			const categories = await courseCommentPrismaProvider.getSome(req.body);
			res.json(categories);
			break;
		}

		case "POST": {
			const category = await courseCommentPrismaProvider.create(req.body);
			res.json(category);
			break;
		}

		default:
			res.json({ error: "not supported method" });
	}
}
