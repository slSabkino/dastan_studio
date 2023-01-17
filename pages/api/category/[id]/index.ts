import { CategoryPrismaProvider } from "@providers/prismaProvider/categoryPrismaProvider";
import { NextApiRequest, NextApiResponse } from "next";

export default async function apiHandler(req: NextApiRequest, res: NextApiResponse) {
	const categoryPrismaProvider = new CategoryPrismaProvider();

	switch (req.method) {
		case "GET": {
			const category = await categoryPrismaProvider.getOne(
				parseInt(req.query.id as string)
			);
			res.json(category);
			break;
		}

		case "PUT": {
			const category = await categoryPrismaProvider.update(
				parseInt(req.query.id as string),
				req.body
			);
			res.json(category);
			break;
		}

		case "DELETE": {
			const category = await categoryPrismaProvider.delete(
				parseInt(req.query.id as string)
			);
			res.json(category);
			break;
		}

		default:
			res.json({ error: "not supported method" });
	}
}
