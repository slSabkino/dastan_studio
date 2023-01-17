import UserPrismaProvider from "@providers/prismaProvider/userPrismaProvider";
import { NextApiRequest, NextApiResponse } from "next";

export default async function apiHandler(req: NextApiRequest, res: NextApiResponse) {
	const userPrismaProvider = new UserPrismaProvider();
	switch (req.method) {
		case "PUT": {
			const data = await userPrismaProvider.getSome(req.body);
			res.json(data);
			break;
		}

		case "POST": {
			const data = await userPrismaProvider.create(req.body);
			res.json(data);
			break;
		}

		default:
			res.json({ error: "not supported method" });
	}
}
