import { PrismaClient } from "@prisma/client";
import { setCookie } from "cookies-next";

import jwt from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";
const prisma = new PrismaClient();

export function tokenValidator(token: string) {
	try {
		const decoded = jwt.verify(token, process.env.TOKEN_KEY as string) as any;
		console.log("decoded : ", decoded);

		return { status: true, ...decoded };
	} catch (error) {
		return { status: false };
	}
}

export async function onUserLogin({ email, password }: { email: string; password: string }) {
	try {
		const user = await prisma.user.findFirst({
			where: {
				email,
			},
			include: { interests: true },
		});

		if (user && user.password === password) {
			const token = jwt.sign(
				{
					userId: user.id,
					username: user.username,
					permissionLevel: user.permissionLevel,
					firstName: user.firstName,
					lastName: user.lastName,
					email: user.email,
					phone: user.phone,
					interests: user.interests,
					cityId: user.cityId,
				},
				process.env.TOKEN_KEY as string
			);
			return token;
		} else {
			throw new Error("not a valid user!");
		}
	} catch (error) {
		throw new Error("error on find user!");
	}
}

export function onBadToken(req: NextApiRequest, res: NextApiResponse) {
	setCookie("token", "", {
		req,
		res,
		// maxAge: 0,
		expires: new Date(0),
		domain: "localhost",
		path: "/",
		sameSite: false,
		httpOnly: false,
		secure: false,
	});
	res.status(401);
	res.send("wrong request!");
}

export function onNoAccess(res: NextApiResponse) {
	res.status(403);
	res.send("no access!");
}
