import { ProvincePrismaProvider } from "@providers/prismaProvider/provincePrismaProvider";
import { NextApiRequest, NextApiResponse } from "next";

export default async function apiHandler(req: NextApiRequest, res: NextApiResponse) {
	const provincePrismaProvider = new ProvincePrismaProvider();

	switch (req.method) {
		case "PUT": {
			const provinces = await provincePrismaProvider.getSome(req.body);
			res.json(provinces);
			break;
		}

		case "POST": {
			const province = await provincePrismaProvider.create(req.body);
			res.json(province);
			break;
		}

		default:
			res.json({ error: "not supported method" });
	}
}
