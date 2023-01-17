import { SubCategoryPrismaProvider } from "@providers/prismaProvider/subCategoryPrismaProvider";
import { NextApiRequest, NextApiResponse } from "next";

export default async function apiHandler(req: NextApiRequest, res: NextApiResponse) {
	const subCategoryPrismaProvider = new SubCategoryPrismaProvider();

	switch (req.method) {
		case "GET": {
			const data = await subCategoryPrismaProvider.getOne(
				parseInt(req.query.id as string)
			);
			res.json(data);
			break;
		}

		case "PUT": {
			const data = await subCategoryPrismaProvider.update(
				parseInt(req.query.id as string),
				req.body
			);
			res.json(data);
			break;
		}

		case "DELETE": {
			const data = await subCategoryPrismaProvider.delete(
				parseInt(req.query.id as string)
			);
			res.json(data);
			break;
		}

		default:
			res.json({ error: "not supported method" });
	}
}
