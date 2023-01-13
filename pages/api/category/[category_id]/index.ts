import { CategoryServerApi } from "@providers/serverApi/categoryServerApi";
import { NextApiRequest, NextApiResponse } from "next";

export default async function lessonApiID(req: NextApiRequest, res: NextApiResponse) {
	const categoryServerApi = new CategoryServerApi();

	switch (req.method) {
		case "GET": {
			const category = await categoryServerApi.getOne(
				parseInt(req.query.category_id as string)
			);
			res.json(category);
			break;
		}

		case "PUT": {
			const category = await categoryServerApi.update(
				parseInt(req.query.category_id as string),
				req.body
			);
			res.json(category);
			break;
		}

		case "DELETE": {
			const category = await categoryServerApi.delete(
				parseInt(req.query.category_id as string)
			);
			res.json(category);
			break;
		}

		default:
			res.json({ error: "not supported method" });
	}
}
