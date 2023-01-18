import { SubCategoryPrismaProvider } from "@providers/prismaProviders/subCategoryPrismaProvider";
import { NextApiRequest, NextApiResponse } from "next";

export default async function apiHandler(req: NextApiRequest, res: NextApiResponse) {
	const subCategoryPrismaProvider = new SubCategoryPrismaProvider();

	switch (req.method) {
		case "PUT": {
			const data = await subCategoryPrismaProvider.getSome(req.body);
			res.json(data);
			break;
		}

		case "POST": {
			const data = await subCategoryPrismaProvider.create(req.body);
			res.json(data);
			break;
		}

		default:
			res.json({ error: "not supported method" });
			break;
	}
}
