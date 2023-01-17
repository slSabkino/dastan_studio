import { iCourse } from "@models/interfaceCourse";
import { iCRUD } from "@models/interfaceCRUD";
import { iError } from "@models/interfaceError";
import { PrismaClient } from "@prisma/client";
import { idExtractor } from "@utilities/idExtractor";

const prisma = new PrismaClient();

export default class CourseServerApi implements iCRUD<iCourse, iError> {
	async getSome(body: any) {
		try {
			const courses = await prisma.course.findMany({
				skip: body.skip,
				take: body.take,
				include: { keywords: true },
			});
			return courses as unknown as [iCourse];
		} catch (error) {
			return { error: "some error on get courses" };
		}
	}

	async getOne(courseId: number) {
		try {
			const course = await prisma.course.findUnique({
				where: { id: courseId },
				include: {
					lessons: true,
				},
			});

			return course as iCourse;
		} catch (error) {
			return { error: "some error on get course" };
		}
	}

	async create(body: any) {
		try {
			const keywordsID = idExtractor(body.keywords as any);
			const course = await prisma.course.create({
				data: {
					title: body.title,
					description: body.description,
					bannerUrl: body.bannerUrl,
					authorId: body.authorId,
					categoryId: body.categoryId,
					price: body.price,
					keywords: {
						connect: keywordsID,
					},
				},
			});
			return course as iCourse;
		} catch (error) {
			return { error: "some error on create course" };
		}
	}

	async update(courseId: number, body: any) {
		try {
			const keywordsID = idExtractor(body.keywords);
			const course = await prisma.course.update({
				where: { id: courseId },
				data: {
					title: body.title,
					description: body.description,
					bannerUrl: body.bannerUrl,
					authorId: body.authorId,
					categoryId: body.categoryId,
					price: body.price,
					keywords: {
						connect: keywordsID,
					},
				},
			});
			return course as iCourse;
		} catch (error) {
			return {
				error: "some error on update course, Maybe the title is repetitive",
			};
		}
	}

	async delete(courseId: number) {
		try {
			const course = await prisma.course.update({
				where: { id: courseId },
				data: { isActive: false },
			});
			return course as iCourse;
		} catch (error) {
			return {
				error: "some error on delete course, Maybe it has already been deleted",
			};
		}
	}
}
