export interface userServerCreateBody {
	firstName: string;
	lastName: string;
	username: string;
	phone: string;
	email: string;
	password: string;
	permissionLevel?: number;
	cityId?: number;
	interests?: number[];
}
