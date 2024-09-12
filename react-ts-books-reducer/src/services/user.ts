export interface LoginInfo{
    _id?:{$oid:string};
    email:String;
    password:String;
}

export interface User extends LoginInfo{
    name:string;
    photo:string;
    roles: string[]
}

