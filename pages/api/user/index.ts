import UserServerApi from "@providers/serverApi/userServerApi";
import { NextApiRequest, NextApiResponse } from "next";

export default async function userApi(req: NextApiRequest, res: NextApiResponse) {
	const userServerApi = new UserServerApi();
	switch (req.method) {
		case "POST": {
			const user = await userServerApi.create(req.body);
			res.json(user);
			break;
		}

		default:
			res.json({ error: "not supported method" });
	}
}
