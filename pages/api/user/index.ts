import UserPrismaProvider from "@providers/prismaProvider/userPrismaProvider";
import { NextApiRequest, NextApiResponse } from "next";

export default async function apiHandler(req: NextApiRequest, res: NextApiResponse) {
	const userPrismaProvider = new UserPrismaProvider();
	switch (req.method) {
		case "PUT": {
			const user = await userPrismaProvider.getSome(req.body);
			res.json(user);
			break;
		}

		case "POST": {
			const user = await userPrismaProvider.create(req.body);
			res.json(user);
			break;
		}

		default:
			res.json({ error: "not supported method" });
	}
}
