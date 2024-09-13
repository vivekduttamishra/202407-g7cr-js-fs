import { User } from "../entities/user";

export interface UserRepository{
    getUserById(id:string): Promise<User|undefined>;
    addUser(user:User):Promise<User>;
}