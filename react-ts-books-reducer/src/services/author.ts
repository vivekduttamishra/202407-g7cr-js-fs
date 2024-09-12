
export interface Author{
    _id?:{$oid:string},
    id:string,
    name:string,
    photo:string,
    biography:string,
    email?:string,
    tags?:string[],
    __v?:number
}