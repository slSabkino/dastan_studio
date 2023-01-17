import { SubCategoryServerApi } from "@providers/serverApi/subCategoryServerApi";
import { NextApiRequest, NextApiResponse } from "next";

export default async function apiHandler(req: NextApiRequest, res: NextApiResponse) {
	const subCategoryServerApi = new SubCategoryServerApi();

	switch (req.method) {
		case "GET": {
			const subCategory = await subCategoryServerApi.getOne(
				parseInt(req.query.id as string)
			);
			res.json(subCategory);
			break;
		}

		case "PUT": {
			const subCategory = await subCategoryServerApi.update(
				parseInt(req.query.id as string),
				req.body
			);
			res.json(subCategory);
			break;
		}

		case "DELETE": {
			const subCategory = await subCategoryServerApi.delete(
				parseInt(req.query.id as string)
			);
			res.json(subCategory);
			break;
		}

		default:
			res.json({ error: "not supported method" });
	}
}
