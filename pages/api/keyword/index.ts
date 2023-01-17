import { KeywordPrismaProvider } from "@providers/prismaProviders/keywordPrismaProvider";
import { NextApiRequest, NextApiResponse } from "next";

export default async function apiHandler(req: NextApiRequest, res: NextApiResponse) {
	const keywordPrismaProvider = new KeywordPrismaProvider();

	switch (req.method) {
		case "PUT": {
			const data = await keywordPrismaProvider.getSome(req.body);
			res.json(data);
			break;
		}

		case "POST": {
			const data = await keywordPrismaProvider.create(req.body);
			res.json(data);
			break;
		}

		default:
			res.json({ error: "not supported method" });
	}
}
