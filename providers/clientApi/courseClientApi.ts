import { iCRUD } from "@models/interfaceCRUD";

export default class CourseServerApi implements iCRUD {
	async getAll() {
		throw new Error("Method not implemented.");
	}
	async getOne(courseId: number) {
		throw new Error("Method not implemented.");
	}
	async create(body: any) {
		throw new Error("Method not implemented.");
	}
	async update(courseId: number) {
		throw new Error("Method not implemented.");
	}
	async delete(courseId: number) {
		throw new Error("Method not implemented.");
	}
}
