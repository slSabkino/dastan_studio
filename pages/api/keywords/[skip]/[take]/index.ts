import { KeywordServerApi } from "@providers/serverApi/keyword";
import { NextApiRequest, NextApiResponse } from "next";

export default async function apiHandler(req: NextApiRequest, res: NextApiResponse) {
	const keywordServerApi = new KeywordServerApi();

	switch (req.method) {
		case "GET": {
			const categories = await keywordServerApi.getSome(
				parseInt(req.query.skip as string),
				parseInt(req.query.take as string)
			);
			res.json(categories);
			break;
		}

		default:
			res.json({ error: "not supported method" });
	}
}
