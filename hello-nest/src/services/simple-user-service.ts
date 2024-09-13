import { User } from "../entities/user";
import { UserService } from "./user-service";
import { Inject, Injectable } from "@nestjs/common";
import { InMemoryUserRepository } from "../repositories/in-memory-user-repository";
import { InvalidCredentialsError } from "../utils/invalid-credentials-error";

@Injectable()
export class SimpleUserService implements UserService{

    constructor(@Inject('userRepository')  private userRepository: InMemoryUserRepository){}


     register=async(user: User)=>{
       return await this.userRepository.addUser(user);
    }
    login=async (email: string, password: string)=> {
        let user  =await this.userRepository.getUserById(email);
        if(user && user.password===password)
            return {...user, password:""};
        else
         throw new InvalidCredentialsError("Invalid Credentials",{});
    }

}