import { CategoryServerApi } from "@providers/serverApi/categoryServerApi";
import { NextApiRequest, NextApiResponse } from "next";

export default async function lessonApiID(req: NextApiRequest, res: NextApiResponse) {
	const categoryServerApi = new CategoryServerApi();

	switch (req.method) {
		case "POST": {
			const category = await categoryServerApi.create(req.body);
			res.json(category);
			break;
		}

		default:
			res.json({ error: "not supported method" });
	}
}
