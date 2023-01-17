import { KeywordPrismaProvider } from "@providers/prismaProvider/keywordPrismaProvider";
import { NextApiRequest, NextApiResponse } from "next";

export default async function apiHandler(req: NextApiRequest, res: NextApiResponse) {
	const keywordPrismaProvider = new KeywordPrismaProvider();

	switch (req.method) {
		case "PUT": {
			const categories = await keywordPrismaProvider.getSome(req.body);
			res.json(categories);
			break;
		}

		case "POST": {
			const category = await keywordPrismaProvider.create(req.body);
			res.json(category);
			break;
		}

		default:
			res.json({ error: "not supported method" });
	}
}
