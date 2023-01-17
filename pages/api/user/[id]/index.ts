import UserPrismaProvider from "@providers/prismaProvider/userPrismaProvider";
import { NextApiRequest, NextApiResponse } from "next";

export default async function apiHandler(req: NextApiRequest, res: NextApiResponse) {
	const userPrismaProvider = new UserPrismaProvider();

	switch (req.method) {
		case "GET": {
			const user = await userPrismaProvider.getOne(
				parseInt(req.query.id as string)
			);
			res.json(user);
			break;
		}

		case "PUT": {
			const user = await userPrismaProvider.update(
				parseInt(req.query.id as string),
				req.body
			);
			res.json(user);
			break;
		}

		case "DELETE": {
			const user = await userPrismaProvider.delete(
				parseInt(req.query.id as string)
			);
			res.json(user);
			break;
		}

		default:
			res.json({ error: "not supported method" });
	}
}
