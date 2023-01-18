import { NewsPrismaProvider } from "@providers/prismaProviders/newsPrismaProvider";
import { NextApiRequest, NextApiResponse } from "next";

export default async function apiHandler(req: NextApiRequest, res: NextApiResponse) {
	const newsPrismaProvider = new NewsPrismaProvider();

	switch (req.method) {
		case "GET": {
			const data = await newsPrismaProvider.getOne(
				parseInt(req.query.id as string)
			);
			res.json(data);
			break;
		}

		case "PUT": {
			const data = await newsPrismaProvider.update(
				parseInt(req.query.id as string),
				req.body
			);
			res.json(data);
			break;
		}

		case "DELETE": {
			const data = await newsPrismaProvider.delete(
				parseInt(req.query.id as string)
			);
			res.json(data);
			break;
		}

		default:
			res.json({ error: "not supported method" });
			break;
	}
}
