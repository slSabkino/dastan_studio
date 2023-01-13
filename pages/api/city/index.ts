import { CityServerApi } from "@providers/serverApi/cityServerApi";
import { NextApiRequest, NextApiResponse } from "next";

export default async function apiHandler(req: NextApiRequest, res: NextApiResponse) {
	const cityServerApi = new CityServerApi();

	switch (req.method) {
		case "POST": {
			const city = await cityServerApi.create(req.body);
			res.json(city);
			break;
		}

		default:
			res.json({ error: "not supported method" });
	}
}
