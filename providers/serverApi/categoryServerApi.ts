import { iCategory } from "@models/interfaceCategory";
import { iError } from "@models/interfaceError";
import { iCRUD } from "@models/interfaceCRUD";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class CategoryServerApi implements iCRUD<iCategory, iError> {
	async getSome(skip: number, take: number) {
		try {
			const categories = await prisma.category.findMany({ skip, take });
			return categories as unknown as [iCategory];
		} catch (error) {
			return { error: "some error on get category" };
		}
	}

	async getOne(categoryId: number) {
		try {
			const category = await prisma.category.findUnique({
				where: {
					id: categoryId,
				},
			});
			return category as iCategory;
		} catch (error) {
			return { error: "some error on get category" };
		}
	}

	async create(body: any) {
		try {
			const category = await prisma.category.create({
				data: { title: body.title },
			});
			return category as iCategory;
		} catch (error) {
			return {
				error: "some error on create category, Maybe it has already existed",
			};
		}
	}

	async update(categoryId: number, body: any) {
		try {
			const category = await prisma.category.update({
				where: { id: categoryId },
				data: { title: body.title },
			});
			return category as iCategory;
		} catch (error) {
			return {
				error: "some error on update category, Maybe the title is repetitive",
			};
		}
	}

	async delete(categoryId: number) {
		try {
			const category = await prisma.category.update({
				where: { id: categoryId },
				data: { isActive: false },
			});
			return category as iCategory;
		} catch (error) {
			return {
				error: "some error on delete category, Maybe it has already been deleted",
			};
		}
	}
}
