import { iSubCategory } from "@models/interfaceCategory";
import { iCRUD } from "@models/interfaceCRUD";
import { iError } from "@models/interfaceError";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class SubCategoryServerApi implements iCRUD<iSubCategory, iError> {
	async getSome(body: any) {
		try {
			const subCategory = await prisma.subCategory.findMany({
				skip: body.skip,
				take: body.take,
			});
			return subCategory as [iSubCategory];
		} catch (error) {
			return { error: "some error on get subCategory" };
		}
	}

	async getOne(subCategoryId: number) {
		try {
			const subCategory = await prisma.subCategory.findUnique({
				where: {
					id: subCategoryId,
				},
			});
			return subCategory as iSubCategory;
		} catch (error) {
			return { error: "some error on get subCategory" };
		}
	}

	async create(body: any) {
		try {
			const subCategory = await prisma.subCategory.create({
				data: {
					title: body.title as string,
					categoryId: body.categoryId as number,
				},
			});
			return subCategory as iSubCategory;
		} catch (error) {
			return {
				error: "some error on create subCategory, Maybe it has already existed",
			};
		}
	}

	async update(subCategoryId: number, body: any) {
		try {
			const subCategory = await prisma.subCategory.update({
				where: { id: subCategoryId },
				data: {
					title: body.title,
					categoryId: body.categoryId as number,
				},
			});
			return subCategory as iSubCategory;
		} catch (error) {
			return {
				error: "some error on update subCategory, Maybe the title is repetitive",
			};
		}
	}

	async delete(subCategoryId: number) {
		try {
			const subCategory = await prisma.subCategory.update({
				where: { id: subCategoryId },
				data: { isActive: false },
			});
			return subCategory as iSubCategory;
		} catch (error) {
			return {
				error: "some error on delete subCategory, Maybe it has already been deleted",
			};
		}
	}
}
