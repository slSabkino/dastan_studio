export interface iCRUD<T, E> {
	getSome(skip: number, take: number): Promise<[T] | E>;
	getOne(id: number): Promise<T | E>;
	create(body: T): Promise<T | E>;
	update(id: number, body: T): Promise<T | E>;
	delete(id: number): Promise<T | E>;
}
