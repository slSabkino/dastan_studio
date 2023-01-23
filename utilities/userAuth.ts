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
			include: { interests: true },
		});

		if (user && user.password === password) {
			const token = jwt.sign(
				{
					userId: user.id,
					username: user.username,
					firstName: user.firstName,
					lastName: user.lastName,
					email: user.email,
					phone: user.phone,
					interests: user.interests,
					cityId: user.cityId,
					permissionLevel: user.permissionLevel,
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
