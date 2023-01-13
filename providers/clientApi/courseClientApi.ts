import { iCourse } from "@models/interfaceCourse";
import { iCRUD } from "@models/interfaceCRUD";
import { iError } from "@models/interfaceError";

export default class CourseServerApi implements iCRUD<iCourse, iError> {
	getSome(skip: number, take: number): Promise<iError | [iCourse]> {
		throw new Error("Method not implemented.");
	}
	getOne(id: number): Promise<iCourse | iError> {
		throw new Error("Method not implemented.");
	}
	create(body: iCourse): Promise<iCourse | iError> {
		throw new Error("Method not implemented.");
	}
	update(id: number, body: iCourse): Promise<iCourse | iError> {
		throw new Error("Method not implemented.");
	}
	delete(id: number): Promise<iCourse | iError> {
		throw new Error("Method not implemented.");
	}
}
