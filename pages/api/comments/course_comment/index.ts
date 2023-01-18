import { CourseCommentPrismaProvider } from "@providers/prismaProviders/courseCommentPrismaProvider";
import { NextApiRequest, NextApiResponse } from "next";

export default async function apiHandler(req: NextApiRequest, res: NextApiResponse) {
	const courseCommentPrismaProvider = new CourseCommentPrismaProvider();

	switch (req.method) {
		case "PUT": {
			const data = await courseCommentPrismaProvider.getSome(req.body);
			res.json(data);
			break;
		}

		case "POST": {
			const data = await courseCommentPrismaProvider.create(req.body);
			res.json(data);
			break;
		}

		default:
			res.json({ error: "not supported method" });
			break;
	}
}
