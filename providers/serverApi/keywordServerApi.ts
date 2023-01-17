import { iCRUD } from "@models/interfaceCRUD";
import { iError } from "@models/interfaceError";
import { iKeyword } from "@models/interfaceKeyword";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class KeywordServerApi implements iCRUD<iKeyword, iError> {
	async getSome(body: any) {
		try {
			const keywords = await prisma.keyword.findMany({
				skip: body.skip,
				take: body.take,
			});
			return keywords as unknown as [iKeyword];
		} catch (error) {
			return { error: "some error on get keyword" };
		}
	}

	async getOne(keywordId: number) {
		try {
			const keyword = await prisma.keyword.findUnique({
				where: {
					id: keywordId,
				},
			});
			return keyword as iKeyword;
		} catch (error) {
			return { error: "some error on get keyword" };
		}
	}

	async create(body: any) {
		try {
			const keyword = await prisma.keyword.create({
				data: {
					title: body.title as string,
				},
			});
			return keyword as iKeyword;
		} catch (error) {
			return {
				error: "some error on create keyword, Maybe it has already existed",
			};
		}
	}

	async update(keywordId: number, body: any) {
		try {
			const keyword = await prisma.keyword.update({
				where: { id: keywordId },
				data: {
					title: body.title,
				},
			});
			return keyword as iKeyword;
		} catch (error) {
			return {
				error: "some error on update keyword, Maybe the title is repetitive",
			};
		}
	}

	async delete(keywordId: number) {
		try {
			const keyword = await prisma.keyword.update({
				where: { id: keywordId },
				data: { isActive: false },
			});
			return keyword as iKeyword;
		} catch (error) {
			return {
				error: "some error on delete keyword, Maybe it has already been deleted",
			};
		}
	}
}
