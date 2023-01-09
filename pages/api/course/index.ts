import CourseServerApi from "@providers/serverApi/courseServerApi";
import { NextApiRequest, NextApiResponse } from "next";

const courseServerApi = new CourseServerApi();

export default async function coursesHandler(req: NextApiRequest, res: NextApiResponse) {
	switch (req.method) {
		case "POST": {
			const user = await courseServerApi.create(req.body);
			console.log("create user : ", user);
			res.json(user);
			break;
		}

		case "GET": {
			const users = await courseServerApi.getAll();
			console.log("get user : ", users);
			res.json(users);
			break;
		}

		default:
			res.json({ err: "not supported method" });
	}
}
