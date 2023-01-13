export interface iComment {
	id?: number;
	description: string;
	subjectId: number;
	userId: number;
	creationDate?: Date;
	isActive?: boolean;
}
