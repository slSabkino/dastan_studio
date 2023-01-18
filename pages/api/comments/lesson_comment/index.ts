import { LessonCommentPrismaProvider } from "@providers/prismaProviders/lessonCommentPrismaProvider";
import { NextApiRequest, NextApiResponse } from "next";

export default async function apiHandler(req: NextApiRequest, res: NextApiResponse) {
	const lessonCommentPrismaProvider = new LessonCommentPrismaProvider();

	switch (req.method) {
		case "PUT": {
			const data = await lessonCommentPrismaProvider.getSome(req.body);
			res.json(data);
			break;
		}

		case "POST": {
			const data = await lessonCommentPrismaProvider.create(req.body);
			res.json(data);
			break;
		}

		default:
			res.json({ error: "not supported method" });
			break;
	}
}
