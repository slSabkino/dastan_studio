import { CityServerApi } from "@providers/serverApi/cityServerApi";
import { NextApiRequest, NextApiResponse } from "next";

export default async function apiHandler(req: NextApiRequest, res: NextApiResponse) {
	const cityServerApi = new CityServerApi();

	switch (req.method) {
		case "GET": {
			const city = await cityServerApi.getOne(
				parseInt(req.query.city_id as string)
			);
			res.json(city);
			break;
		}

		case "PUT": {
			const city = await cityServerApi.update(
				parseInt(req.query.city_id as string),
				req.body
			);
			res.json(city);
			break;
		}

		case "DELETE": {
			const city = await cityServerApi.delete(
				parseInt(req.query.city_id as string)
			);
			res.json(city);
			break;
		}

		default:
			res.json({ error: "not supported method" });
	}
}
