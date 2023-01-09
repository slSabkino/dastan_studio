import { iCRUD } from "@models/interfaceCRUD";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default class CourseServerApi implements iCRUD {
	getAll = async function () {
		try {
			const courses = await prisma.course.findMany();
			return courses;
		} catch (error) {
			return { err: "some error on get courses" };
		}
	};

	getOne = async function (courseId: number) {
		try {
			const course = await prisma.course.findUnique({
				where: { id: courseId },
				include: {
					lessons: {
						select: { title: true, id: true, bannerUrl: true },
					},
				},
			});

			return course;
		} catch (error) {
			return { err: "some error on get course" };
		}
	};

	create = async function (body: any) {
		try {
			const queryRes = await prisma.course.create({
				data: body,
			});
			return queryRes;
		} catch (error: any) {
			return { err: "some error on create course" };
		}
	};

	async update(courseId: number) {
		throw new Error("Method not implemented.");
	}

	async delete(courseId: number) {
		throw new Error("Method not implemented.");
	}
}
