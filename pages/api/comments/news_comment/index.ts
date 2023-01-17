import { NewsCommentPrismaProvider } from "@providers/prismaProviders/newsCommentPrismaProvider";
import { NextApiRequest, NextApiResponse } from "next";

export default async function apiHandler(req: NextApiRequest, res: NextApiResponse) {
	const newsCommentPrismaProvider = new NewsCommentPrismaProvider();

	switch (req.method) {
		case "PUT": {
			const data = await newsCommentPrismaProvider.getSome(req.body);
			res.json(data);
			break;
		}

		case "POST": {
			const data = await newsCommentPrismaProvider.create(req.body);
			res.json(data);
			break;
		}

		default:
			res.json({ error: "not supported method" });
	}
}
