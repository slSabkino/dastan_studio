export interface iCourse {
	id?: number;
	title: string;
	description: string;
	authorId: number;
	categoryId: number;
	bannerUrl?: string;
	isActive?: boolean;
	creationDate?: Date;
	updateDate?: Date;
	price?: number;

	// related
	author?: any;
	category?: any;
	keywords?: any[];
	comments?: any[];
	lessons?: any[];
}
