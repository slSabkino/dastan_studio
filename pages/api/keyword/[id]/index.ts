import { KeywordPrismaProvider } from "@providers/prismaProvider/keywordPrismaProvider";
import { NextApiRequest, NextApiResponse } from "next";

export default async function apiHandler(req: NextApiRequest, res: NextApiResponse) {
	const keywordPrismaProvider = new KeywordPrismaProvider();

	switch (req.method) {
		case "GET": {
			const keyword = await keywordPrismaProvider.getOne(
				parseInt(req.query.id as string)
			);
			res.json(keyword);
			break;
		}

		case "PUT": {
			const keyword = await keywordPrismaProvider.update(
				parseInt(req.query.id as string),
				req.body
			);
			res.json(keyword);
			break;
		}

		case "DELETE": {
			const keyword = await keywordPrismaProvider.delete(
				parseInt(req.query.id as string)
			);
			res.json(keyword);
			break;
		}

		default:
			res.json({ error: "not supported method" });
	}
}
