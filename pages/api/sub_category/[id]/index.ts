import { SubCategoryPrismaProvider } from "@providers/prismaProvider/subCategoryPrismaProvider";
import { NextApiRequest, NextApiResponse } from "next";

export default async function apiHandler(req: NextApiRequest, res: NextApiResponse) {
	const subCategoryPrismaProvider = new SubCategoryPrismaProvider();

	switch (req.method) {
		case "GET": {
			const subCategory = await subCategoryPrismaProvider.getOne(
				parseInt(req.query.id as string)
			);
			res.json(subCategory);
			break;
		}

		case "PUT": {
			const subCategory = await subCategoryPrismaProvider.update(
				parseInt(req.query.id as string),
				req.body
			);
			res.json(subCategory);
			break;
		}

		case "DELETE": {
			const subCategory = await subCategoryPrismaProvider.delete(
				parseInt(req.query.id as string)
			);
			res.json(subCategory);
			break;
		}

		default:
			res.json({ error: "not supported method" });
	}
}
