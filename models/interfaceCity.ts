export interface iProvince {
	id?: number;
	title: string;
	isActive?: boolean;
}

export interface iCity {
	id?: number;
	title: string;
	provinceId?: number;
	isActive?: boolean;
}
