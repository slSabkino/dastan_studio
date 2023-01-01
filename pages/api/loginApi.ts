import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import { serialize } from "cookie";

const prisma = new PrismaClient();

export default async function userApi(req: NextApiRequest, res: NextApiResponse) {
	switch (req.method) {
		case "GET": {
			res.json({ cookie: req.cookies });
		}
		case "POST": {
			try {
				const acount = await checkUser(req.body);
				console.log("create user : ", acount);
				res.setHeader(
					"Set-Cookie",
					serialize("token", acount.token, {
						maxAge: 60 * 60 * 12 * 30,
						domain: "localhost",
						path: "/",
					})
				);
				res.json(acount.user);
			} catch (error) {
				res.json({ err: error });
			}
		}
		default: {
			res.json({ log: req.method });
		}
	}
}

async function checkUser({ email, password }: { email: string; password: string }) {
	const user = await prisma.user.findFirst({
		where: {
			email,
		},
	});

	if (user && user.password === password) {
		const token = jwt.sign(
			{
				firstName: user.firstName,
				lastName: user.lastName,
				username: user.username,
			},
			"verySecure"
		);
		return { token, user };
	} else {
		throw new Error("no user");
	}
}
