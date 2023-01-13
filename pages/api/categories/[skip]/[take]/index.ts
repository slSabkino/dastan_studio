import { CategoryServerApi } from "@providers/serverApi/categoryServerApi";
import { NextApiRequest, NextApiResponse } from "next";

export default async function apiHandler(req: NextApiRequest, res: NextApiResponse) {
	const categoryServerApi = new CategoryServerApi();

	switch (req.method) {
		case "GET": {
			const categories = await categoryServerApi.getSome(
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
