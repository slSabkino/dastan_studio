import { ProvincePrismaProvider } from "@providers/prismaProviders/provincePrismaProvider";
import { NextApiRequest, NextApiResponse } from "next";

export default async function apiHandler(req: NextApiRequest, res: NextApiResponse) {
	const provincePrismaProvider = new ProvincePrismaProvider();

	switch (req.method) {
		case "PUT": {
			const data = await provincePrismaProvider.getSome(req.body);
			res.json(data);
			break;
		}

		case "POST": {
			const data = await provincePrismaProvider.create(req.body);
			res.json(data);
			break;
		}

		default:
			res.json({ error: "not supported method" });
	}
}
