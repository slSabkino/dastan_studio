import { ProvinceServerApi } from "@providers/serverApi/provinceServerApi";
import { NextApiRequest, NextApiResponse } from "next";

export default async function apiHandler(req: NextApiRequest, res: NextApiResponse) {
	const provinceServerApi = new ProvinceServerApi();

	switch (req.method) {
		case "GET": {
			const province = await provinceServerApi.getOne(
				parseInt(req.query.province_id as string)
			);
			res.json(province);
			break;
		}

		case "PUT": {
			const province = await provinceServerApi.update(
				parseInt(req.query.province_id as string),
				req.body
			);
			res.json(province);
			break;
		}

		case "DELETE": {
			const province = await provinceServerApi.delete(
				parseInt(req.query.province_id as string)
			);
			res.json(province);
			break;
		}

		default:
			res.json({ error: "not supported method" });
	}
}
