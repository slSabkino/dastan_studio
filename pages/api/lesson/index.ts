import { LessonPrismaProvider } from "@providers/prismaProviders/lessonPrismaProvider";
import { NextApiRequest, NextApiResponse } from "next";

export default async function apiHandler(req: NextApiRequest, res: NextApiResponse) {
	const lessonPrismaProvider = new LessonPrismaProvider();

	switch (req.method) {
		case "PUT": {
			const data = await lessonPrismaProvider.getSome(req.body);
			res.json(data);
			break;
		}

		case "POST": {
			const data = await lessonPrismaProvider.create(req.body);
			res.json(data);
			break;
		}

		default:
			res.json({ error: "not supported method" });
			break;
	}
}
