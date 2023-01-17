import { NewsPrismaProvider } from "@providers/prismaProvider/newsPrismaProvider";
import { NextApiRequest, NextApiResponse } from "next";

export default async function apiHandler(req: NextApiRequest, res: NextApiResponse) {
	const newsPrismaProvider = new NewsPrismaProvider();

	switch (req.method) {
		case "PUT": {
			const data = await newsPrismaProvider.getSome(req.body);
			res.json(data);
			break;
		}

		case "POST": {
			const data = await newsPrismaProvider.create(req.body);
			res.json(data);
			break;
		}

		default:
			res.json({ error: "not supported method" });
	}
}
