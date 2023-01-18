import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import { setCookie } from "cookies-next";

const prisma = new PrismaClient();

export default async function apiHandler(req: NextApiRequest, res: NextApiResponse) {
	switch (req.method) {
		case "GET": {
			res.json({ cookie: req.cookies });
			break;
		}

		case "POST": {
			try {
				const acount = await checkUser(req.body);
				if (acount) {
					setCookie("token", acount.token, {
						req,
						res,
						maxAge: 60 * 60 * 12 * 30,
						domain: "localhost",
						path: "/",
						sameSite: false,
						httpOnly: false,
						secure: false,
					});
					res.json({ state: true, acount: acount.user });
				} else {
					res.json({
						state: false,
						error: "not valid login",
					});
				}
			} catch (error) {
				res.json({ state: false, error });
			}
			break;
		}

		default: {
			res.json({ log: req.method });
			break;
		}
	}
}

async function checkUser({ email, password }: { email: string; password: string }) {
	try {
		const user = await prisma.user.findFirst({
			where: {
				email,
			},
		});
		if (user && user.password === password) {
			const token = jwt.sign(
				{
					userId: user.id,
					username: user.username,
				},
				"verySecure"
			);
			return { token, user };
		} else {
			throw new Error("no user");
		}
	} catch (error) {
		console.log("error on find user!");
	}
}
