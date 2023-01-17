import { ProvincePrismaProvider } from "@providers/prismaProvider/provincePrismaProvider";
import { NextApiRequest, NextApiResponse } from "next";

export default async function apiHandler(req: NextApiRequest, res: NextApiResponse) {
	const provincePrismaProvider = new ProvincePrismaProvider();

	switch (req.method) {
		case "GET": {
			const province = await provincePrismaProvider.getOne(
				parseInt(req.query.id as string)
			);
			res.json(province);
			break;
		}

		case "PUT": {
			const province = await provincePrismaProvider.update(
				parseInt(req.query.id as string),
				req.body
			);
			res.json(province);
			break;
		}

		case "DELETE": {
			const province = await provincePrismaProvider.delete(
				parseInt(req.query.id as string)
			);
			res.json(province);
			break;
		}

		default:
			res.json({ error: "not supported method" });
	}
}
