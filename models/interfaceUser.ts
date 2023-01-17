export interface iUser {
	id?: number;
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

	//related
	city?: any;
	interests?: [any];
	course?: [any];
	post?: [any];
	news?: [any];
	adminMessage?: [any];
	PurchasedCourses?: [any];
}
