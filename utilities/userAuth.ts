import { PrismaClient } from "@prisma/client";

import jwt from "jsonwebtoken";
const prisma = new PrismaClient();

export function tokenValidator(token: string) {
	try {
		const decoded = jwt.verify(token, process.env.TOKEN_KEY as string) as any;
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
		});

		if (user && user.password === password) {
			const token = jwt.sign(
				{
					userId: user.id,
					username: user.username,
					permissionLevel: user.permissionLevel,
				},
				process.env.TOKEN_KEY as string
			);
			return { token, user };
		} else {
			throw new Error("not a valid user!");
		}
	} catch (error) {
		throw new Error("error on find user!");
	}
}
