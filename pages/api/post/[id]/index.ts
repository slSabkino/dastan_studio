import { PostPrismaProvider } from "@providers/prismaProviders/postPrismaProvider";
import { NextApiRequest, NextApiResponse } from "next";

export default async function apiHandler(req: NextApiRequest, res: NextApiResponse) {
	const postPrismaProvider = new PostPrismaProvider();

	switch (req.method) {
		case "GET": {
			const data = await postPrismaProvider.getOne(
				parseInt(req.query.id as string)
			);
			res.json(data);
			break;
		}

		case "PUT": {
			const data = await postPrismaProvider.update(
				parseInt(req.query.id as string),
				req.body
			);
			res.json(data);
			break;
		}

		case "DELETE": {
			const data = await postPrismaProvider.delete(
				parseInt(req.query.id as string)
			);
			res.json(data);
			break;
		}

		default:
			res.json({ error: "not supported method" });
	}
}
