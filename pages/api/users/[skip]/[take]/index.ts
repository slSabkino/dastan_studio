import UserServerApi from "@providers/serverApi/userServerApi";
import { NextApiRequest, NextApiResponse } from "next";

export default async function userApi(req: NextApiRequest, res: NextApiResponse) {
	const userServerApi = new UserServerApi();
	switch (req.method) {
		case "GET": {
			const users = await userServerApi.getSome(
				parseInt(req.query.skip as string),
				parseInt(req.query.take as string)
			);
			res.json(users);
			break;
		}

		default:
			res.json({ error: "not supported method" });
	}
}
