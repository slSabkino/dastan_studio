export interface iPost {
	id?: number;
	title: string;
	description: string;
	bannerUrl: string;
	authorId: number;
	categoryId: number;
	isActive?: boolean;
	creationDate?: Date;
	updateDate?: Date;

	// related
	category?: any;
	author?: any;
	keywords?: any[];
	comments?: any[];
}
