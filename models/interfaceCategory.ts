export interface iCategory {
	id: number;
	title: string;
	isActive?: boolean;
	subCategory?: [];
}

export interface iSubCategory {
	id: number;
	title: string;
	categoryId: number;
	category?: iCategory;
	isActive?: boolean;
	course?: [];
	post?: [];
	news?: [];
}
