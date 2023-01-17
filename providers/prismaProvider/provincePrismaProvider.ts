import { iProvince } from "@models/interfaceCity";
import { iCRUD } from "@models/interfaceCRUD";
import { iError } from "@models/interfaceError";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class ProvincePrismaProvider implements iCRUD<iProvince, iError> {
	async getSome(body: any): Promise<[iProvince] | iError> {
		try {
			const response = await prisma.province.findMany({
				skip: body.skip,
				take: body.take,
			});
			return response as unknown as [iProvince];
		} catch (error) {
			return { error: "some error on get province" };
		}
	}

	async getOne(provinceId: number): Promise<iProvince | iError> {
		try {
			const response = await prisma.province.findUnique({
				where: {
					id: provinceId,
				},
			});
			return response as unknown as iProvince;
		} catch (error) {
			return { error: "some error on get province" };
		}
	}

	async create(body: any): Promise<iProvince | iError> {
		try {
			const response = await prisma.province.create({
				data: {
					title: body.title as string,
				},
			});
			return response as unknown as iProvince;
		} catch (error) {
			return {
				error: "some error on create province, Maybe it has already existed",
			};
		}
	}

	async update(provinceId: number, body: any): Promise<iProvince | iError> {
		try {
			const response = await prisma.province.update({
				where: { id: provinceId },
				data: {
					title: body.title,
				},
			});
			return response as unknown as iProvince;
		} catch (error) {
			return {
				error: "some error on update province, Maybe the title is repetitive",
			};
		}
	}

	async delete(provinceId: number): Promise<iProvince | iError> {
		try {
			const response = await prisma.province.update({
				where: { id: provinceId },
				data: { isActive: false },
			});
			return response as unknown as iProvince;
		} catch (error) {
			return {
				error: "some error on delete province, Maybe it has already been deleted",
			};
		}
	}
}
