import { ProvinceServerApi } from "@providers/serverApi/provinceServerApi";
import { NextApiRequest, NextApiResponse } from "next";

export default async function apiHandler(req: NextApiRequest, res: NextApiResponse) {
	const provinceServerApi = new ProvinceServerApi();

	switch (req.method) {
		case "GET": {
			const provinces = await provinceServerApi.getSome(
				parseInt(req.query.skip as string),
				parseInt(req.query.take as string)
			);
			res.json(provinces);
			break;
		}

		default:
			res.json({ error: "not supported method" });
	}
}
