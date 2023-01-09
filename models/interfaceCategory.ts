export interface iCategory {
	id: number;
	title: string;
	subCategory?: [];
}

export interface iSubCategory {
	id: number;
	title: string;
	categoryId: number;
	category?: string;
	course?: [];
	post?: [];
	news?: [];
}
