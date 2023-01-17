export interface iProvince {
	id?: number;
	title: string;
	isActive?: boolean;

	// related
	city?: [any];
}

export interface iCity {
	id?: number;
	title: string;
	provinceId?: number;
	isActive?: boolean;

	// related
	province?: any;
	user?: [any];
}
