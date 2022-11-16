import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
	// console.log("req : ", req.method);
	if (req.method === "POST") {
		console.log("bodyInfo", req.body);
		const { first_name, last_name, username, phone, email } = JSON.parse(req.body);

		console.log("first_name : ", first_name);

		let newPhone;
		if (typeof phone === "number") {
			newPhone = phone.toString();
		} else {
			newPhone = phone;
		}

		const user = await prisma.user.create({
			data: { first_name, last_name, phone: newPhone, username, email },
		});
		console.log("userInfo : ", user);
		res.json({ user });
		return;
	}

	// const posts = await prisma.post.findMany();

	res.json({ user: {} });
}
