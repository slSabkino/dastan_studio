export interface iCategory {
	id?: number;
	title: string;
	isActive?: boolean;

	// related
	subCategory?: any[];
}

export interface iSubCategory {
	id?: number;
	title: string;
	categoryId: number;
	isActive?: boolean;

	// related
	category?: any;
	course?: any[];
	post?: any[];
	news?: any[];
	//intersted users
	interests?: any[];
}
