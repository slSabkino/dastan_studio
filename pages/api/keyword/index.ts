import { KeywordServerApi } from "@providers/serverApi/keyword";
import { NextApiRequest, NextApiResponse } from "next";

export default async function apiHandler(req: NextApiRequest, res: NextApiResponse) {
	const keywordServerApi = new KeywordServerApi();

	switch (req.method) {
		case "POST": {
			const category = await keywordServerApi.create(req.body);
			res.json(category);
			break;
		}

		default:
			res.json({ error: "not supported method" });
	}
}
