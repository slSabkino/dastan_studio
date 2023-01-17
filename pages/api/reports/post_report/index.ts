import { PostReportPrismaProvider } from "@providers/prismaProvider/postReportPrismaProvider";
import { NextApiRequest, NextApiResponse } from "next";

export default async function apiHandler(req: NextApiRequest, res: NextApiResponse) {
	const postReportPrismaProvider = new PostReportPrismaProvider();

	switch (req.method) {
		case "PUT": {
			const categories = await postReportPrismaProvider.getSome(req.body);
			res.json(categories);
			break;
		}

		case "POST": {
			const category = await postReportPrismaProvider.create(req.body);
			res.json(category);
			break;
		}

		default:
			res.json({ error: "not supported method" });
	}
}
