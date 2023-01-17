import { CityPrismaProvider } from "@providers/prismaProvider/cityPrismaProvider";
import { NextApiRequest, NextApiResponse } from "next";

export default async function apiHandler(req: NextApiRequest, res: NextApiResponse) {
	const cityPrismaProvider = new CityPrismaProvider();

	switch (req.method) {
		case "PUT": {
			const data = await cityPrismaProvider.getSome(req.body);
			res.json(data);
			break;
		}
		case "POST": {
			const data = await cityPrismaProvider.create(req.body);
			res.json(data);
			break;
		}

		default:
			res.json({ error: "not supported method" });
	}
}
