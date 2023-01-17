import { LessonCommentPrismaProvider } from "@providers/prismaProvider/lessonCommentPrismaProvider";
import { NextApiRequest, NextApiResponse } from "next";

export default async function apiHandler(req: NextApiRequest, res: NextApiResponse) {
	const lessonCommentPrismaProvider = new LessonCommentPrismaProvider();

	switch (req.method) {
		case "GET": {
			const data = await lessonCommentPrismaProvider.getOne(
				parseInt(req.query.id as string)
			);
			res.json(data);
			break;
		}

		case "PUT": {
			const data = await lessonCommentPrismaProvider.update(
				parseInt(req.query.id as string),
				req.body
			);
			res.json(data);
			break;
		}

		case "DELETE": {
			const data = await lessonCommentPrismaProvider.delete(
				parseInt(req.query.id as string)
			);
			res.json(data);
			break;
		}

		default:
			res.json({ error: "not supported method" });
	}
}
