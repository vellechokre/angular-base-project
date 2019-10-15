export interface IQueryParams {
    [key:string] : any;
}

export interface IPagination {
    page: number;
    size: number;
    count: number;
}