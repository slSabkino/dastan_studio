import { PostReportPrismaProvider } from "@providers/prismaProviders/postReportPrismaProvider";
import { NextApiRequest, NextApiResponse } from "next";

export default async function apiHandler(req: NextApiRequest, res: NextApiResponse) {
	const postReportPrismaProvider = new PostReportPrismaProvider();

	switch (req.method) {
		case "GET": {
			const data = await postReportPrismaProvider.getOne(
				parseInt(req.query.id as string)
			);
			res.json(data);
			break;
		}

		case "PUT": {
			const data = await postReportPrismaProvider.update(
				parseInt(req.query.id as string),
				req.body
			);
			res.json(data);
			break;
		}

		case "DELETE": {
			const data = await postReportPrismaProvider.delete(
				parseInt(req.query.id as string)
			);
			res.json(data);
			break;
		}

		default:
			res.json({ error: "not supported method" });
			break;
	}
}
