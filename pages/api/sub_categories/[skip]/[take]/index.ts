import { SubCategoryServerApi } from "@providers/serverApi/subCategoryServerApi";
import { NextApiRequest, NextApiResponse } from "next";

export default async function lessonApiID(req: NextApiRequest, res: NextApiResponse) {
	const subCategoryServerApi = new SubCategoryServerApi();

	switch (req.method) {
		case "GET": {
			const subCategories = await subCategoryServerApi.getSome(
				parseInt(req.query.skip as string),
				parseInt(req.query.take as string)
			);
			res.json(subCategories);
			break;
		}

		default:
			res.json({ error: "not supported method" });
	}
}
