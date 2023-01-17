export interface iLesson {
	id?: number;
	title: string;
	description: string;
	bannerUrl: string;
	videoUrl: string;
	courseId: number;
	isActive?: boolean;
	creationDate?: Date;
	updateDate?: Date;

	// related
	course?: any;
	keywords?: [any];
	lessonComment?: [any];
}
