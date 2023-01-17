import { PostReportPrismaProvider } from "@providers/prismaProvider/postReportPrismaProvider";
import { NextApiRequest, NextApiResponse } from "next";

export default async function apiHandler(req: NextApiRequest, res: NextApiResponse) {
	const postReportPrismaProvider = new PostReportPrismaProvider();

	switch (req.method) {
		case "GET": {
			const category = await postReportPrismaProvider.getOne(
				parseInt(req.query.id as string)
			);
			res.json(category);
			break;
		}

		case "PUT": {
			const category = await postReportPrismaProvider.update(
				parseInt(req.query.id as string),
				req.body
			);
			res.json(category);
			break;
		}

		case "DELETE": {
			const category = await postReportPrismaProvider.delete(
				parseInt(req.query.id as string)
			);
			res.json(category);
			break;
		}

		default:
			res.json({ error: "not supported method" });
	}
}
