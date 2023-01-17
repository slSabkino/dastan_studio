import { CategoryPrismaProvider } from "@providers/prismaProvider/categoryPrismaProvider";
import { NextApiRequest, NextApiResponse } from "next";

export default async function apiHandler(req: NextApiRequest, res: NextApiResponse) {
	const categoryPrismaProvider = new CategoryPrismaProvider();

	switch (req.method) {
		case "PUT": {
			const categories = await categoryPrismaProvider.getSome(req.body);
			res.json(categories);
			break;
		}

		case "POST": {
			const category = await categoryPrismaProvider.create(req.body);
			res.json(category);
			break;
		}

		default:
			res.json({ error: "not supported method" });
	}
}
