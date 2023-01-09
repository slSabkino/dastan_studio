import { iCRUD } from "@models/interfaceCRUD";
import { iUser } from "@models/interfaceUser";
import { PrismaClient } from "@prisma/client";
import { idExtractor } from "@utilities/idExtractor";

const prisma = new PrismaClient();

export default class UserServerApi implements iCRUD {
	async getAll() {
		try {
			const users = await prisma.user.findMany({ include: { interests: true } });
			return users;
		} catch (error) {
			return { err: "some error on get users" };
		}
	}

	async getOne(courseId: number) {
		try {
			const users = await prisma.user.findUnique({
				where: { id: courseId },
			});
			return users;
		} catch (error) {
			return { err: "some error on get user" };
		}
	}

	async create(body: iUser) {
		try {
			const {
				email,
				firstName,
				lastName,
				phone,
				username,
				cityId,
				interests,
				password,
			} = body;

			const interestsID = idExtractor(interests as any);

			const sameUsername = await prisma.user.findFirst({
				where: { username },
			});
			if (sameUsername) {
				return { err: "this username already exist" };
			}

			const samePhone = await prisma.user.findFirst({
				where: { phone },
			});
			if (samePhone) {
				return { err: "this phone number already exist" };
			}

			const queryRes = await prisma.user.create({
				data: {
					firstName,
					lastName,
					username,
					phone,
					email,
					password: password as string,
					cityId,
					interests: {
						connect: interestsID,
					},
				},
			});

			return queryRes;
		} catch (error: any) {
			console.log("error : ", error);

			return { err: "some error on create user" };
		}
	}

	async update(courseId: number) {
		throw new Error("Method not implemented.");
	}

	async delete(courseId: number) {
		throw new Error("Method not implemented.");
	}
}
