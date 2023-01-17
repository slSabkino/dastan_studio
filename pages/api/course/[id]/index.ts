import CoursePrismaProvider from "@providers/prismaProvider/coursePrismaProvider";
import { NextApiRequest, NextApiResponse } from "next";

export default async function apiHandler(req: NextApiRequest, res: NextApiResponse) {
	const coursePrismaProvider = new CoursePrismaProvider();

	switch (req.method) {
		case "GET": {
			const course = await coursePrismaProvider.getOne(
				parseInt(req.query.id as string)
			);
			res.json(course);
			break;
		}

		case "PUT": {
			const course = await coursePrismaProvider.update(
				parseInt(req.query.id as string),
				req.body
			);
			res.json(course);
			break;
		}

		case "DELETE": {
			const course = await coursePrismaProvider.delete(
				parseInt(req.query.id as string)
			);
			res.json(course);
			break;
		}

		default:
			res.json({ error: "not supported method" });
	}
}
