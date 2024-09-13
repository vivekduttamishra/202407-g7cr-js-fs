import { Body, Controller, Get, Inject, Post } from "@nestjs/common";
import { User } from "../entities/user";
import { SimpleUserService } from "../services/simple-user-service";

@Controller('/api/users')
export class UserController{

    constructor(@Inject('userService') private userService: SimpleUserService){}

    @Get()
    async getUsers(){
        
        return ['User1', 'User2', 'User3'];
    }

    @Post()
    async register(@Body() user:User){
        return await this.userService.register(user);
    }

}

@Controller()
export class TokenController{
    constructor(@Inject('userService') private userService: SimpleUserService){}
    @Post('/api/token')
    async loginToken(@Body() user:Partial<User>){

        return await this.userService.login(user.email!,user.password!);
    }

}

