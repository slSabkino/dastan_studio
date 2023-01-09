import { iCRUD } from "@models/interfaceCRUD";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class CategoryServerApi implements iCRUD {
	async getAll() {
		try {
			const categories = await prisma.category.findMany();
			return categories;
		} catch (error) {
			return { err: "some error on get category" };
		}
	}

	async getOne(courseId: number) {
		try {
			const categories = await prisma.category.findUnique({
				where: {
					id: courseId,
				},
			});
			return categories;
		} catch (error) {
			return { err: "some error on get category" };
		}
	}

	async create(body: any) {
		throw new Error("Method not implemented.");
	}

	async update(courseId: number) {
		throw new Error("Method not implemented.");
	}

	async delete(courseId: number) {
		throw new Error("Method not implemented.");
	}
}
