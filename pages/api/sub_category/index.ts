import { SubCategoryServerApi } from "@providers/serverApi/subCategoryServerApi";
import { NextApiRequest, NextApiResponse } from "next";

export default async function lessonApiID(req: NextApiRequest, res: NextApiResponse) {
	const subCategoryServerApi = new SubCategoryServerApi();

	switch (req.method) {
		case "POST": {
			const subCategory = await subCategoryServerApi.create(req.body);
			res.json(subCategory);
			break;
		}

		default:
			res.json({ error: "not supported method" });
	}
}
