import { iCRUD } from "@models/interfaceCRUD";
import { iError } from "@models/interfaceError";
import { iNews } from "@models/interfaceNews";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class NewsPrismaProvider implements iCRUD<iNews, iError> {
	async getSome(body: any): Promise<iError | [iNews]> {
		try {
			const response = await prisma.post.findMany({
				skip: body.skip,
				take: body.take,
			});
			return response as unknown as [iNews];
		} catch (error) {
			return { error: "some error on get admin messages" };
		}
	}

	async getOne(id: number): Promise<iNews | iError> {
		try {
			const response = await prisma.post.findUnique({
				where: { id },
			});
			return response as unknown as iNews;
		} catch (error) {
			return { error: "some error on get admin message" };
		}
	}

	async create(body: any): Promise<iNews | iError> {
		try {
			const response = await prisma.post.create({
				data: {
					title: body.title,
					description: body.description,
					bannerUrl: body.bannerUrl,
					authorId: body.authorId,
					categoryId: body.categoryId,
				},
			});
			return response as unknown as iNews;
		} catch (error) {
			return { error: "some error on create course admin message" };
		}
	}

	async update(id: number, body: any): Promise<iNews | iError> {
		try {
			const response = await prisma.post.update({
				where: {
					id,
				},
				data: {
					title: body.title,
					description: body.description,
					bannerUrl: body.bannerUrl,
					categoryId: body.categoryId,
				},
			});
			return response as unknown as iNews;
		} catch (error) {
			return { error: "some error on update course admin message" };
		}
	}

	async delete(id: number): Promise<iNews | iError> {
		try {
			const response = await prisma.post.update({
				where: {
					id,
				},
				data: {
					isActive: false,
				},
			});
			return response as unknown as iNews;
		} catch (error) {
			return { error: "some error on delete course admin message" };
		}
	}
}
