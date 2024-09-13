import { Injectable } from "@nestjs/common";
import { User } from "../entities/user";
import { UserRepository } from "./user.repository";


const users:User[]= [

    { name: "John", email: "john@example.com" ,password: "password", roles:['admin'], photo:'john.png' },
];


@Injectable()
export class InMemoryUserRepository implements UserRepository{


    getUserById=async(id: string)=> {
        return users.find(u=>u.email===id);
    }
    addUser=async (user: User)=> {
        users.push(user);
        return user;
    }
}