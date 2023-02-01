import { iSubCategory } from "@models/interfaceCategory";
import { iCRUD } from "@models/interfaceCRUD";
import { iError } from "@models/interfaceError";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class SubCategoryPrismaProvider implements iCRUD<iSubCategory, iError> {
	async getSome(body: any): Promise<iSubCategory[] | iError> {
		try {
			const response = await prisma.subCategory.findMany({
				skip: body.skip,
				take: body.take,
			});
			return response as unknown as iSubCategory[];
		} catch (error) {
			return { error: "some error on get subCategory" };
		}
	}

	async getOne(subCategoryId: number): Promise<iSubCategory | iError> {
		try {
			const response = await prisma.subCategory.findUnique({
				where: {
					id: subCategoryId,
				},
			});
			return response as unknown as iSubCategory;
		} catch (error) {
			return { error: "some error on get subCategory" };
		}
	}

	async create(body: any): Promise<iSubCategory | iError> {
		try {
			const response = await prisma.subCategory.create({
				data: {
					title: body.title as string,
					categoryId: body.categoryId as number,
				},
			});
			return response as unknown as iSubCategory;
		} catch (error) {
			return {
				error: "some error on create subCategory, Maybe it has already existed",
			};
		}
	}

	async update(subCategoryId: number, body: any): Promise<iSubCategory | iError> {
		try {
			const response = await prisma.subCategory.update({
				where: { id: subCategoryId },
				data: {
					title: body.title,
					categoryId: body.categoryId as number,
				},
			});
			return response as unknown as iSubCategory;
		} catch (error) {
			return {
				error: "some error on update subCategory, Maybe the title is repetitive",
			};
		}
	}

	async delete(subCategoryId: number): Promise<iSubCategory | iError> {
		try {
			const response = await prisma.subCategory.update({
				where: { id: subCategoryId },
				data: { isActive: false },
			});
			return response as unknown as iSubCategory;
		} catch (error) {
			return {
				error: "some error on delete subCategory, Maybe it has already been deleted",
			};
		}
	}
}
