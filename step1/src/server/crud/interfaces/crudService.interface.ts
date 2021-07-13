export interface ICrudService<T> {
    // getOne(id: number): Promise<T>
    getOne(id: number): any
    // getAll(): Promise<T[]>
    getAll(query: any): Promise<any>
    insert(entity: T): Promise<number>
    update(id: any, data: any): Promise<T>
    delete(id: number)
    destroyAll(): Promise<any>
}
