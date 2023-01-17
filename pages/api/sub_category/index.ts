import { SubCategoryServerApi } from "@providers/serverApi/subCategoryServerApi";
import { NextApiRequest, NextApiResponse } from "next";

export default async function apiHandler(req: NextApiRequest, res: NextApiResponse) {
	const subCategoryServerApi = new SubCategoryServerApi();

	switch (req.method) {
		case "PUT": {
			const subCategories = await subCategoryServerApi.getSome(req.body);
			res.json(subCategories);
			break;
		}

		case "POST": {
			const subCategory = await subCategoryServerApi.create(req.body);
			res.json(subCategory);
			break;
		}

		default:
			res.json({ error: "not supported method" });
	}
}
