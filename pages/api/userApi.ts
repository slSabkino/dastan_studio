import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { userServerCreateBody } from "types/usersTypes";

const prisma = new PrismaClient();

export default async function userApi(req: NextApiRequest, res: NextApiResponse) {
	switch (req.method) {
		case "POST": {
			const user = await createUser(req.body);
			console.log("create user : ", user);
			res.json(user);
			break;
		}

		case "GET": {
			const users = await getUsers();
			console.log("get user : ", users);
			res.json(users);
			break;
		}

		default:
			res.json({ err: "not supported method" });
	}
}

async function createUser(body: userServerCreateBody) {
	try {
		const queryRes = await prisma.user.create({
			data: body,
		});
		console.log("userInfo : ", queryRes);
		return queryRes;
	} catch (error: any) {
		console.log("userErr : ", error.message);
		return { err: error.message };
		// return { err: "some error on create user" };
	}
}

async function getUsers() {
	try {
		const users = await prisma.user.findMany();
		return users;
	} catch (error) {
		return { err: "some error on get users" };
	}
}
