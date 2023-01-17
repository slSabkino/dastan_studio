import { iComment } from "@models/interfaceComment";
import { iCRUD } from "@models/interfaceCRUD";
import { iError } from "@models/interfaceError";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class LessonCommentPrismaProvider implements iCRUD<iComment, iError> {
	async getSome(body: any): Promise<iError | [iComment]> {
		try {
			const response = await prisma.lessonComment.findMany({
				where: { subjectId: body.subjectId },
				skip: body.skip,
				take: body.take,
			});
			return response as unknown as [iComment];
		} catch (error) {
			return { error: "some error on get course comments" };
		}
	}

	async getOne(id: number): Promise<iComment | iError> {
		try {
			const response = await prisma.lessonComment.findUnique({
				where: { id },
			});
			return response as unknown as iComment;
		} catch (error) {
			return { error: "some error on get course comment" };
		}
	}

	async create(body: any): Promise<iComment | iError> {
		try {
			const response = await prisma.lessonComment.create({
				data: {
					description: body.description,
					subjectId: body.subjectId,
					userId: body.userId,
				},
			});
			return response as unknown as iComment;
		} catch (error) {
			return { error: "some error on create course comment" };
		}
	}

	async update(id: number, body: any): Promise<iComment | iError> {
		try {
			const response = await prisma.lessonComment.update({
				where: {
					id,
				},
				data: {
					description: body.description,
				},
			});
			return response as unknown as iComment;
		} catch (error) {
			return { error: "some error on update course comment" };
		}
	}

	async delete(id: number): Promise<iComment | iError> {
		try {
			const response = await prisma.lessonComment.update({
				where: {
					id,
				},
				data: {
					isActive: false,
				},
			});
			return response as unknown as iComment;
		} catch (error) {
			return { error: "some error on delete course comment" };
		}
	}
}
