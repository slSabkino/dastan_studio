export interface iCategory {
	id?: number;
	title: string;
	isActive?: boolean;
}

export interface iSubCategory {
	id?: number;
	title: string;
	categoryId: number;
	isActive?: boolean;
}
