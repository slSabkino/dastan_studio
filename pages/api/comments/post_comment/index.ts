import { PostCommentPrismaProvider } from "@providers/prismaProviders/postCommentPrismaProvider";
import { NextApiRequest, NextApiResponse } from "next";

export default async function apiHandler(req: NextApiRequest, res: NextApiResponse) {
	const postCommentPrismaProvider = new PostCommentPrismaProvider();

	switch (req.method) {
		case "PUT": {
			const data = await postCommentPrismaProvider.getSome(req.body);
			res.json(data);
			break;
		}

		case "POST": {
			const data = await postCommentPrismaProvider.create(req.body);
			res.json(data);
			break;
		}

		default:
			res.json({ error: "not supported method" });
	}
}
