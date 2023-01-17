import { CourseCommentPrismaProvider } from "@providers/prismaProvider/courseCommentPrismaProvider";
import { NextApiRequest, NextApiResponse } from "next";

export default async function apiHandler(req: NextApiRequest, res: NextApiResponse) {
	const courseCommentPrismaProvider = new CourseCommentPrismaProvider();

	switch (req.method) {
		case "GET": {
			const category = await courseCommentPrismaProvider.getOne(
				parseInt(req.query.id as string)
			);
			res.json(category);
			break;
		}

		case "PUT": {
			const category = await courseCommentPrismaProvider.update(
				parseInt(req.query.id as string),
				req.body
			);
			res.json(category);
			break;
		}

		case "DELETE": {
			const category = await courseCommentPrismaProvider.delete(
				parseInt(req.query.id as string)
			);
			res.json(category);
			break;
		}

		default:
			res.json({ error: "not supported method" });
	}
}
