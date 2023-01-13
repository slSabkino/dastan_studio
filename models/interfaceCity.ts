export interface iProvince {
	id?: number;
	title: string;
	city?: [];
	isActive?: boolean;
}

export interface iCity {
	id?: number;
	title: string;
	province?: iProvince;
	provinceId?: number;
	user?: [];
	isActive?: boolean;
}
