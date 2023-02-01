import { iCity } from "@models/interfaceCity";
import { iCRUD } from "@models/interfaceCRUD";
import { iError } from "@models/interfaceError";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class CityPrismaProvider implements iCRUD<iCity, iError> {
	async getSome(body: any): Promise<iError | iCity[]> {
		try {
			const response = await prisma.city.findMany({
				skip: body.skip,
				take: body.take,
			});
			return response as unknown as iCity[];
		} catch (error) {
			return { error: "some error on get city" };
		}
	}

	async getOne(cityId: number): Promise<iCity | iError> {
		try {
			const response = await prisma.city.findUnique({
				where: {
					id: cityId,
				},
			});
			return response as unknown as iCity;
		} catch (error) {
			return { error: "some error on get city" };
		}
	}

	async create(body: any): Promise<iCity | iError> {
		try {
			const response = await prisma.city.create({
				data: {
					title: body.title as string,
					provinceId: body.provinceId,
				},
			});
			return response as unknown as iCity;
		} catch (error) {
			return {
				error: "some error on create city, Maybe it has already existed",
			};
		}
	}

	async update(cityId: number, body: any): Promise<iCity | iError> {
		try {
			const response = await prisma.city.update({
				where: { id: cityId },
				data: {
					title: body.title,
				},
			});
			return response as unknown as iCity;
		} catch (error) {
			return {
				error: "some error on update city, Maybe the title is repetitive",
			};
		}
	}

	async delete(cityId: number): Promise<iCity | iError> {
		try {
			const response = await prisma.city.update({
				where: { id: cityId },
				data: { isActive: false },
			});
			return response as unknown as iCity;
		} catch (error) {
			return {
				error: "some error on delete city, Maybe it has already been deleted",
			};
		}
	}
}
