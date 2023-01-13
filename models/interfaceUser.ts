import { iCategory } from "./interfaceCategory";
import { iCourse } from "./interfaceCourse";

export interface iUser {
	id: number;
	firstName: string;
	lastName: string;
	username: string;
	phone: string;
	email: string;
	password?: string;
	isActive?: boolean;
	permissionLevel?: number;
	RegisterDate?: Date;
	cityId?: number;
	city?: string;
	interests?: [iCategory];
	course?: [iCourse];
	post?: [];
	news?: [];
	adminMessage?: [];
}
