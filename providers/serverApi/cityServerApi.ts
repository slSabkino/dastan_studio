import { iCity } from "@models/interfaceCity";
import { iCRUD } from "@models/interfaceCRUD";
import { iError } from "@models/interfaceError";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class CityServerApi implements iCRUD<iCity, iError> {
	async getSome(skip: number, take: number) {
		try {
			const cities = await prisma.city.findMany({ skip, take });
			return cities as unknown as [iCity];
		} catch (error) {
			return { error: "some error on get city" };
		}
	}

	async getOne(cityId: number) {
		try {
			const city = await prisma.city.findUnique({
				where: {
					id: cityId,
				},
			});
			return city as iCity;
		} catch (error) {
			return { error: "some error on get city" };
		}
	}

	async create(body: any) {
		try {
			const city = await prisma.city.create({
				data: {
					title: body.title as string,
					provinceId: body.provinceId,
				},
			});
			return city as iCity;
		} catch (error) {
			return {
				error: "some error on create city, Maybe it has already existed",
			};
		}
	}

	async update(cityId: number, body: any) {
		try {
			const city = await prisma.city.update({
				where: { id: cityId },
				data: {
					title: body.title,
				},
			});
			return city as iCity;
		} catch (error) {
			return {
				error: "some error on update city, Maybe the title is repetitive",
			};
		}
	}

	async delete(cityId: number) {
		try {
			const city = await prisma.city.update({
				where: { id: cityId },
				data: { isActive: false },
			});
			return city as iCity;
		} catch (error) {
			return {
				error: "some error on delete city, Maybe it has already been deleted",
			};
		}
	}
}
