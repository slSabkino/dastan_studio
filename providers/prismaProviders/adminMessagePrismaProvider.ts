import { iAdminMessage } from "@models/interfaceAdminMessage";
import { iCRUD } from "@models/interfaceCRUD";
import { iError } from "@models/interfaceError";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class AdminMessagePrismaProvider implements iCRUD<iAdminMessage, iError> {
	async getSome(body: any): Promise<iError | iAdminMessage[]> {
		try {
			const response = await prisma.adminMessage.findMany({
				where: { userId: body.userId },
				skip: body.skip,
				take: body.take,
			});
			return response as unknown as iAdminMessage[];
		} catch (error) {
			return { error: "some error on get admin messages" };
		}
	}

	async getOne(id: number): Promise<iAdminMessage | iError> {
		try {
			const response = await prisma.adminMessage.findUnique({
				where: { id },
			});
			return response as unknown as iAdminMessage;
		} catch (error) {
			return { error: "some error on get admin message" };
		}
	}

	async create(body: any): Promise<iAdminMessage | iError> {
		try {
			const response = await prisma.adminMessage.create({
				data: {
					title: body.title,
					description: body.description,
					userId: body.userId,
				},
			});
			return response as unknown as iAdminMessage;
		} catch (error) {
			return { error: "some error on create course admin message" };
		}
	}

	async update(id: number, body: any): Promise<iAdminMessage | iError> {
		try {
			const response = await prisma.adminMessage.update({
				where: {
					id,
				},
				data: {
					title: body.title,
					description: body.description,
				},
			});
			return response as unknown as iAdminMessage;
		} catch (error) {
			return { error: "some error on update course admin message" };
		}
	}

	async delete(id: number): Promise<iAdminMessage | iError> {
		try {
			const response = await prisma.adminMessage.update({
				where: {
					id,
				},
				data: {
					isActive: false,
				},
			});
			return response as unknown as iAdminMessage;
		} catch (error) {
			return { error: "some error on delete course admin message" };
		}
	}
}
