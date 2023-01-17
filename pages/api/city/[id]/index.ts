import { CityPrismaProvider } from "@providers/prismaProvider/cityPrismaProvider";
import { NextApiRequest, NextApiResponse } from "next";

export default async function apiHandler(req: NextApiRequest, res: NextApiResponse) {
	const cityPrismaProvider = new CityPrismaProvider();

	switch (req.method) {
		case "GET": {
			const city = await cityPrismaProvider.getOne(
				parseInt(req.query.id as string)
			);
			res.json(city);
			break;
		}

		case "PUT": {
			const city = await cityPrismaProvider.update(
				parseInt(req.query.id as string),
				req.body
			);
			res.json(city);
			break;
		}

		case "DELETE": {
			const city = await cityPrismaProvider.delete(
				parseInt(req.query.id as string)
			);
			res.json(city);
			break;
		}

		default:
			res.json({ error: "not supported method" });
	}
}
