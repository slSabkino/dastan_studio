import UserServerApi from "@providers/serverApi/userServerApi";
import { NextApiRequest, NextApiResponse } from "next";

export default async function userApi(req: NextApiRequest, res: NextApiResponse) {
	const userServerApi = new UserServerApi();

	switch (req.method) {
		case "GET": {
			const user = await userServerApi.getOne(
				parseInt(req.query.user_id as string)
			);
			res.json(user);
			break;
		}

		case "PUT": {
			const user = await userServerApi.update(
				parseInt(req.query.user_id as string),
				req.body
			);
			res.json(user);
			break;
		}

		case "DELETE": {
			const user = await userServerApi.delete(
				parseInt(req.query.user_id as string)
			);
			res.json(user);
			break;
		}

		default:
			res.json({ error: "not supported method" });
	}
}
