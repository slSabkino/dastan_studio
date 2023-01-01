export interface courseServerCreateBody {
	title: string;
	description: string;
	bannerUrl: string;
	authorId: number;
	categoryId: number;
	price?: number;
}
