export interface iCRUD {
	getAll(): any;
	getOne(courseId: number): any;
	create(body: any): any;
	update(courseId: number): any;
	delete(courseId: number): any;
}
