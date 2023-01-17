import UserServerApi from "@providers/serverApi/userServerApi";
import { NextApiRequest, NextApiResponse } from "next";

export default async function apiHandler(req: NextApiRequest, res: NextApiResponse) {
	const userServerApi = new UserServerApi();
	switch (req.method) {
		case "PUT": {
			const user = await userServerApi.getSome(req.body);
			res.json(user);
			break;
		}

		case "POST": {
			const user = await userServerApi.create(req.body);
			res.json(user);
			break;
		}

		default:
			res.json({ error: "not supported method" });
	}
}
