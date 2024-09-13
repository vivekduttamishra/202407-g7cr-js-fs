import { User } from "../entities/user";

export interface UserService{

    register(user:User):Promise<User>;
    login(email:string, password:string):Promise<User>;
}