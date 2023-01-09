import { PrismaClient } from "@prisma/client";
import UserServerApi from "@providers/serverApi/userServerApi";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

const userServerApi = new UserServerApi();

export default async function userApi(req: NextApiRequest, res: NextApiResponse) {
	switch (req.method) {
		case "POST": {
			const user = await userServerApi.create(req.body);
			res.json(user);
			break;
		}

		case "GET": {
			const users = await userServerApi.getAll();
			res.json(users);
			break;
		}

		default:
			res.json({ err: "not supported method" });
	}
}
