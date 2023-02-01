export interface iCRUD<T, E> {
	getSome(body: any): Promise<T[] | E>;
	getOne(id: number): Promise<T | E>;
	create(body: any): Promise<T | E>;
	update(id: number, body: any): Promise<T | E>;
	delete(id: number): Promise<T | E>;
}
