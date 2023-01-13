export interface iAdminMessage {
	id?: number;
	title: string;
	description: string;
	userId: number;
	isActive?: boolean;
	isReaded?: boolean;
	creationDate?: Date;
}
