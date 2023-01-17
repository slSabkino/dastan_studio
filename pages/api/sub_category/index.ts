import { SubCategoryPrismaProvider } from "@providers/prismaProvider/subCategoryPrismaProvider";
import { NextApiRequest, NextApiResponse } from "next";

export default async function apiHandler(req: NextApiRequest, res: NextApiResponse) {
	const subCategoryPrismaProvider = new SubCategoryPrismaProvider();

	switch (req.method) {
		case "PUT": {
			const subCategories = await subCategoryPrismaProvider.getSome(req.body);
			res.json(subCategories);
			break;
		}

		case "POST": {
			const subCategory = await subCategoryPrismaProvider.create(req.body);
			res.json(subCategory);
			break;
		}

		default:
			res.json({ error: "not supported method" });
	}
}
