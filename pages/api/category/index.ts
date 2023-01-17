import { CategoryPrismaProvider } from "@providers/prismaProviders/categoryPrismaProvider";
import { NextApiRequest, NextApiResponse } from "next";

export default async function apiHandler(req: NextApiRequest, res: NextApiResponse) {
	const categoryPrismaProvider = new CategoryPrismaProvider();

	switch (req.method) {
		case "PUT": {
			const data = await categoryPrismaProvider.getSome(req.body);
			res.json(data);
			break;
		}

		case "POST": {
			const data = await categoryPrismaProvider.create(req.body);
			res.json(data);
			break;
		}

		default:
			res.json({ error: "not supported method" });
	}
}
