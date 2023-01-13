import { ProvinceServerApi } from "@providers/serverApi/provinceServerApi";
import { NextApiRequest, NextApiResponse } from "next";

export default async function apiHandler(req: NextApiRequest, res: NextApiResponse) {
	const provinceServerApi = new ProvinceServerApi();

	switch (req.method) {
		case "POST": {
			const province = await provinceServerApi.create(req.body);
			res.json(province);
			break;
		}

		default:
			res.json({ error: "not supported method" });
	}
}
