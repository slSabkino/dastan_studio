import { CityPrismaProvider } from "@providers/prismaProvider/cityPrismaProvider";
import { NextApiRequest, NextApiResponse } from "next";

export default async function apiHandler(req: NextApiRequest, res: NextApiResponse) {
	const cityPrismaProvider = new CityPrismaProvider();

	switch (req.method) {
		case "PUT": {
			const cities = await cityPrismaProvider.getSome(req.body);
			res.json(cities);
			break;
		}
		case "POST": {
			const city = await cityPrismaProvider.create(req.body);
			res.json(city);
			break;
		}

		default:
			res.json({ error: "not supported method" });
	}
}
