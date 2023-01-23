import UserPrismaProvider from "@providers/prismaProviders/userPrismaProvider";
import { onNoAccess, onBadToken, tokenValidator } from "@providers/userAuth";
import { NextApiRequest, NextApiResponse } from "next";

export default async function apiHandler(req: NextApiRequest, res: NextApiResponse) {
	const userPrismaProvider = new UserPrismaProvider();
	switch (req.method) {
		case "PUT": {
			const token = tokenValidator(req?.cookies?.token as string);

			if (token.status) {
				const data = await userPrismaProvider.getSome(req.body);
				console.log(req?.cookies?.token);
				if (token.permissionLevel > 11) {
					res.json(data);
					break;
				} else {
					onNoAccess(res);
					break;
				}
			} else {
				onBadToken(req, res);
				break;
			}

			break;
		}

		case "POST": {
			const data = await userPrismaProvider.create(req.body);
			res.json(data);
			break;
		}

		default:
			res.json({ error: "not supported method" });
			break;
	}
}
