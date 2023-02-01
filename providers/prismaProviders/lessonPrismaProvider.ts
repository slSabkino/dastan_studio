import { iCRUD } from "@models/interfaceCRUD";
import { iError } from "@models/interfaceError";
import { iLesson } from "@models/interfaceLesson";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class LessonPrismaProvider implements iCRUD<iLesson, iError> {
	async getSome(body: any): Promise<iError | iLesson[]> {
		try {
			const response = await prisma.lesson.findMany({
				where: { courseId: body.courseId },
				skip: body.skip,
				take: body.take,
			});
			return response as unknown as iLesson[];
		} catch (error) {
			return { error: "some error on get admin messages" };
		}
	}

	async getOne(id: number): Promise<iLesson | iError> {
		try {
			const response = await prisma.lesson.findUnique({
				where: { id },
			});
			return response as unknown as iLesson;
		} catch (error) {
			return { error: "some error on get admin message" };
		}
	}

	async create(body: any): Promise<iLesson | iError> {
		try {
			const response = await prisma.lesson.create({
				data: {
					title: body.title,
					description: body.description,
					courseId: body.courseId,
					bannerUrl: body.bannerUrl,
					videoUrl: body.videoUrl,
				},
			});
			return response as unknown as iLesson;
		} catch (error) {
			return { error: "some error on create course admin message" };
		}
	}

	async update(id: number, body: any): Promise<iLesson | iError> {
		try {
			const response = await prisma.lesson.update({
				where: {
					id,
				},
				data: {
					title: body.title,
					description: body.description,
					bannerUrl: body.bannerUrl,
					videoUrl: body.videoUrl,
				},
			});
			return response as unknown as iLesson;
		} catch (error) {
			return { error: "some error on update course admin message" };
		}
	}

	async delete(id: number): Promise<iLesson | iError> {
		try {
			const response = await prisma.lesson.update({
				where: {
					id,
				},
				data: {
					isActive: false,
				},
			});
			return response as unknown as iLesson;
		} catch (error) {
			return { error: "some error on delete course admin message" };
		}
	}
}
