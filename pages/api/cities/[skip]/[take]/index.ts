import { CityServerApi } from "@providers/serverApi/cityServerApi";
import { NextApiRequest, NextApiResponse } from "next";

export default async function apiHandler(req: NextApiRequest, res: NextApiResponse) {
	const cityServerApi = new CityServerApi();

	switch (req.method) {
		case "GET": {
			const cities = await cityServerApi.getSome(
				parseInt(req.query.skip as string),
				parseInt(req.query.take as string)
			);
			res.json(cities);
			break;
		}

		default:
			res.json({ error: "not supported method" });
	}
}
