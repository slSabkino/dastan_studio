import { CityServerApi } from "@providers/serverApi/cityServerApi";
import { NextApiRequest, NextApiResponse } from "next";

export default async function apiHandler(req: NextApiRequest, res: NextApiResponse) {
	const cityServerApi = new CityServerApi();

	switch (req.method) {
		case "PUT": {
			const cities = await cityServerApi.getSome(req.body);
			res.json(cities);
			break;
		}
		case "POST": {
			const city = await cityServerApi.create(req.body);
			res.json(city);
			break;
		}

		default:
			res.json({ error: "not supported method" });
	}
}
