export interface iNews {
	id?: number;
	title: string;
	description: string;
	bannerUrl: string;
	authorId: number;
	categoryId: number;
	isActive?: boolean;
	creationDate?: Date;
	updateDate?: Date;
}
