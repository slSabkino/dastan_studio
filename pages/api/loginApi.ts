import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import { serialize } from "cookie";

const prisma = new PrismaClient();

export default async function apiHandler(req: NextApiRequest, res: NextApiResponse) {
	switch (req.method) {
		case "GET": {
			res.json({ cookie: req.cookies });
		}
		case "POST": {
			try {
				console.log("create user : ", req.body);
				const acount = await checkUser(req.body);
				if (acount) {
					res.setHeader(
						"Set-Cookie",
						serialize("token", acount.token, {
							// sameSite: false,
							maxAge: 60 * 60 * 12 * 30,
							// domain: "localhost",
							// path: "/",
						})
					);
					res.json({ state: true, acount: acount.user });
				} else {
					res.json({
						state: false,
						error: "not valid",
					});
				}
			} catch (error) {
				res.json({ state: false, error });
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
	console.log("user : ", user);

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
