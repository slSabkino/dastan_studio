import { PostReportPrismaProvider } from "@providers/prismaProvider/postReportPrismaProvider";
import { NextApiRequest, NextApiResponse } from "next";

export default async function apiHandler(req: NextApiRequest, res: NextApiResponse) {
	const postReportPrismaProvider = new PostReportPrismaProvider();

	switch (req.method) {
		case "PUT": {
			const data = await postReportPrismaProvider.getSome(req.body);
			res.json(data);
			break;
		}

		case "POST": {
			const data = await postReportPrismaProvider.create(req.body);
			res.json(data);
			break;
		}

		default:
			res.json({ error: "not supported method" });
	}
}
