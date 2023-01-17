import { iCRUD } from "@models/interfaceCRUD";
import { iError } from "@models/interfaceError";
import { iKeyword } from "@models/interfaceKeyword";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class KeywordPrismaProvider implements iCRUD<iKeyword, iError> {
	async getSome(body: any): Promise<[iKeyword] | iError> {
		try {
			const response = await prisma.keyword.findMany({
				skip: body.skip,
				take: body.take,
			});
			return response as unknown as [iKeyword];
		} catch (error) {
			return { error: "some error on get keywords" };
		}
	}

	async getOne(keywordId: number): Promise<iKeyword | iError> {
		try {
			const response = await prisma.keyword.findUnique({
				where: {
					id: keywordId,
				},
			});
			return response as unknown as iKeyword;
		} catch (error) {
			return { error: "some error on get keyword" };
		}
	}

	async create(body: any): Promise<iKeyword | iError> {
		try {
			const response = await prisma.keyword.create({
				data: {
					title: body.title as string,
				},
			});
			return response as unknown as iKeyword;
		} catch (error) {
			return {
				error: "some error on create keyword, Maybe it has already existed",
			};
		}
	}

	async update(keywordId: number, body: any): Promise<iKeyword | iError> {
		try {
			const response = await prisma.keyword.update({
				where: { id: keywordId },
				data: {
					title: body.title,
				},
			});
			return response as unknown as iKeyword;
		} catch (error) {
			return {
				error: "some error on update keyword, Maybe the title is repetitive",
			};
		}
	}

	async delete(keywordId: number): Promise<iKeyword | iError> {
		try {
			const response = await prisma.keyword.update({
				where: { id: keywordId },
				data: { isActive: false },
			});
			return response as unknown as iKeyword;
		} catch (error) {
			return {
				error: "some error on delete keyword, Maybe it has already been deleted",
			};
		}
	}
}
