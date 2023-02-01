import { iCategory } from "@models/interfaceCategory";
import { iError } from "@models/interfaceError";
import { iCRUD } from "@models/interfaceCRUD";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class CategoryPrismaProvider implements iCRUD<iCategory, iError> {
	async getSome(body: any): Promise<iError | iCategory[]> {
		try {
			const response = await prisma.category.findMany({
				skip: body.skip,
				take: body.take,
			});
			return response as unknown as iCategory[];
		} catch (error) {
			return { error: "some error on get category" };
		}
	}

	async getOne(categoryId: number): Promise<iCategory | iError> {
		try {
			const response = await prisma.category.findUnique({
				where: {
					id: categoryId,
				},
			});
			return response as unknown as iCategory;
		} catch (error) {
			return { error: "some error on get category" };
		}
	}

	async create(body: any): Promise<iCategory | iError> {
		try {
			const response = await prisma.category.create({
				data: { title: body.title },
			});
			return response as unknown as iCategory;
		} catch (error) {
			return {
				error: "some error on create category, Maybe it has already existed",
			};
		}
	}

	async update(categoryId: number, body: any): Promise<iCategory | iError> {
		try {
			const response = await prisma.category.update({
				where: { id: categoryId },
				data: { title: body.title },
			});
			return response as unknown as iCategory;
		} catch (error) {
			return {
				error: "some error on update category, Maybe the title is repetitive",
			};
		}
	}

	async delete(categoryId: number): Promise<iCategory | iError> {
		try {
			const response = await prisma.category.update({
				where: { id: categoryId },
				data: { isActive: false },
			});
			return response as unknown as iCategory;
		} catch (error) {
			return {
				error: "some error on delete category, Maybe it has already been deleted",
			};
		}
	}
}
