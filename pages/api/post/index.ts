import { PostPrismaProvider } from "@providers/prismaProvider/postPrismaProvider";
import { NextApiRequest, NextApiResponse } from "next";

export default async function apiHandler(req: NextApiRequest, res: NextApiResponse) {
	const postPrismaProvider = new PostPrismaProvider();

	switch (req.method) {
		case "PUT": {
			const data = await postPrismaProvider.getSome(req.body);
			res.json(data);
			break;
		}

		case "POST": {
			const data = await postPrismaProvider.create(req.body);
			res.json(data);
			break;
		}

		default:
			res.json({ error: "not supported method" });
	}
}
