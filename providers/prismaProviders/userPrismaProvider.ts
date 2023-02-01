import { iCRUD } from "@models/interfaceCRUD";
import { iError } from "@models/interfaceError";
import { iUser } from "@models/interfaceUser";
import { PrismaClient } from "@prisma/client";
import { idExtractor } from "@utilities/idExtractor";

const prisma = new PrismaClient();

export default class UserPrismaProvider implements iCRUD<iUser, iError> {
	async getSome(body: any): Promise<iUser[] | iError> {
		try {
			const response = await prisma.user.findMany({
				skip: body.skip,
				take: body.take,
				select: {
					id: true,
					username: true,
					lastName: true,
					firstName: true,
					email: true,
					phone: true,
					permissionLevel: true,
					interests: true,
					city: { select: { title: true, provinceId: true } },
				},
			});
			return response as unknown as iUser[];
		} catch (error) {
			return { error: "some error on get users" };
		}
	}

	async getOne(userId: number): Promise<iUser | iError> {
		try {
			const response = await prisma.user.findUnique({
				where: { id: userId },
				select: {
					id: true,
					username: true,
					lastName: true,
					firstName: true,
					email: true,
					phone: true,
					permissionLevel: true,
					interests: true,
					city: true,
					course: true,
					post: true,
					news: true,
					PurchasedCourses: true,
				},
			});
			return response as unknown as iUser;
		} catch (error) {
			return { error: "some error on get user" };
		}
	}

	async create(body: any): Promise<iUser | iError> {
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
				return { error: "this username already exist" };
			}

			const samePhone = await prisma.user.findFirst({
				where: { phone },
			});
			if (samePhone) {
				return { error: "this phone number already exist" };
			}

			const response = await prisma.user.create({
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

				select: {
					id: true,
					email: true,
					lastName: true,
					firstName: true,
					username: true,
					phone: true,
					permissionLevel: true,
					city: true,
					interests: true,
				},
			});

			return response as unknown as iUser;
		} catch (error: any) {
			return { error: "some error on create user" };
		}
	}

	async update(userId: number, body: any): Promise<iUser | iError> {
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

			if (username) {
				const sameUsername = await prisma.user.findFirst({
					where: { username },
				});
				if (sameUsername && sameUsername.id !== userId) {
					return {
						error: "this username already exist",
					};
				}
			}

			if (phone) {
				const samePhone = await prisma.user.findFirst({
					where: { phone },
				});
				if (samePhone && samePhone.id !== userId) {
					return { error: "this phone number already exist" };
				}
			}

			const response = await prisma.user.update({
				where: { id: userId },
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

				select: {
					id: true,
					email: true,
					lastName: true,
					firstName: true,
					username: true,
					phone: true,
					permissionLevel: true,
					city: true,
					interests: true,
				},
			});

			return response as unknown as iUser;
		} catch (error: any) {
			return { error: "some error on update user" };
		}
	}

	async delete(userId: number): Promise<iUser | iError> {
		try {
			const response = await prisma.user.update({
				where: { id: userId },
				data: { isActive: false },
			});
			return response as unknown as iUser;
		} catch (error) {
			return {
				error: "some error on delete user, Maybe it has already been deleted",
			};
		}
	}
}
