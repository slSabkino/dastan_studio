import { iComment } from "@models/interfaceComment";
import { iCrudDepend } from "@models/interfaceCRUD";
import { iError } from "@models/interfaceError";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class CourseCommntServerApi implements iCrudDepend<iComment, iError> {
	async getSome(body: any): Promise<iError | [iComment]> {
		try {
			const courseComments = await prisma.courseComment.findMany({
				where: { subjectId: body.subjectId },
				skip: body.skip,
				take: body.take,
			});
			return courseComments as [iComment];
		} catch (error) {
			return { error: "some error on get course comments" };
		}
	}
	async getOne(id: number): Promise<iComment | iError> {
		try {
			const courseComment = await prisma.courseComment.findUnique({
				where: { id },
			});
			return courseComment as iComment;
		} catch (error) {
			return { error: "some error on get course comment" };
		}
	}
	async create(body: any): Promise<iComment | iError> {
		try {
			const courseCommnet = await prisma.courseComment.create({
				data: {
					description: body.description,
					subjectId: body.subjectId,
					userId: body.userId,
				},
			});
			return courseCommnet;
		} catch (error) {
			return { error: "some error on create course commnet" };
		}
	}
	async update(id: number, body: any): Promise<iComment | iError> {
		try {
			const courseCommnet = await prisma.courseComment.update({
				where: {
					id,
				},
				data: {
					description: body.description,
				},
			});
			return courseCommnet;
		} catch (error) {
			return { error: "some error on update course commnet" };
		}
	}
	async delete(id: number): Promise<iComment | iError> {
		try {
			const courseCommnet = await prisma.courseComment.update({
				where: {
					id,
				},
				data: {
					isActive: false,
				},
			});
			return courseCommnet;
		} catch (error) {
			return { error: "some error on delete course commnet" };
		}
	}
}
