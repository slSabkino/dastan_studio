export interface iCourse {
	id: number;
	title: string;
	description: string;
	authorId: number;
	categoryId: number;
	bannerUrl?: string;
	isActive?: boolean;
	creationDate?: Date;
	updateDate?: Date;
	price?: number;
	category?: string;
	keywords?: [];
	comments?: [];
	lessons?: [];
}
