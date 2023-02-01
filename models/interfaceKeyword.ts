export interface iKeyword {
	id?: number;
	title: string;
	isActive?: boolean;

	// related
	course?: any[];
	lesson?: any[];
	post?: any[];
	news?: any[];
}
