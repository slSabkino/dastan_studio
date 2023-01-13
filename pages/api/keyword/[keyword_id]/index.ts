import { KeywordServerApi } from "@providers/serverApi/keyword";
import { NextApiRequest, NextApiResponse } from "next";

export default async function apiHandler(req: NextApiRequest, res: NextApiResponse) {
	const keywordServerApi = new KeywordServerApi();

	switch (req.method) {
		case "GET": {
			const keyword = await keywordServerApi.getOne(
				parseInt(req.query.keyword_id as string)
			);
			res.json(keyword);
			break;
		}

		case "PUT": {
			const keyword = await keywordServerApi.update(
				parseInt(req.query.keyword_id as string),
				req.body
			);
			res.json(keyword);
			break;
		}

		case "DELETE": {
			const keyword = await keywordServerApi.delete(
				parseInt(req.query.keyword_id as string)
			);
			res.json(keyword);
			break;
		}

		default:
			res.json({ error: "not supported method" });
	}
}
