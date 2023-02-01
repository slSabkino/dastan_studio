import { iCRUD } from "@models/interfaceCRUD";
import { iError } from "@models/interfaceError";
import { iReport } from "@models/interfaceReport";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class PostReportPrismaProvider implements iCRUD<iReport, iError> {
	async getSome(body: any): Promise<iError | iReport[]> {
		try {
			const response = await prisma.postReport.findMany({
				where: { subjectId: body.subjectId },
				skip: body.skip,
				take: body.take,
			});
			return response as unknown as iReport[];
		} catch (error) {
			return { error: "some error on get post reports " };
		}
	}

	async getOne(id: number): Promise<iReport | iError> {
		try {
			const response = await prisma.postReport.findUnique({
				where: { id },
			});
			return response as unknown as iReport;
		} catch (error) {
			return { error: "some error on get post report " };
		}
	}

	async create(body: any): Promise<iReport | iError> {
		try {
			const response = await prisma.postReport.create({
				data: {
					description: body.description,
					subjectId: body.subjectId,
					userId: body.userId,
				},
			});
			return response as unknown as iReport;
		} catch (error) {
			return { error: "some error on create post report " };
		}
	}

	async update(id: number, body: any): Promise<iReport | iError> {
		try {
			const response = await prisma.postReport.update({
				where: {
					id,
				},
				data: {
					description: body.description,
				},
			});
			return response as unknown as iReport;
		} catch (error) {
			return { error: "some error on update post report " };
		}
	}

	async delete(id: number): Promise<iReport | iError> {
		try {
			const response = await prisma.postReport.update({
				where: {
					id,
				},
				data: {
					isActive: false,
				},
			});
			return response as unknown as iReport;
		} catch (error) {
			return { error: "some error on delete post report " };
		}
	}
}
