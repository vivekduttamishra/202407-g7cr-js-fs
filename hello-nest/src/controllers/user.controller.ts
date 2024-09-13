import { Controller, Get, Post } from "@nestjs/common";

@Controller('/api/users')
export class UserController{

    @Get()
    async getUsers(){
        
        return ['User1', 'User2', 'User3'];
    }

    @Post()
    async createUser(){
        return `User created successfully`;
    }

}

@Controller()
export class TokenController{
    @Post('/api/token')
    async loginToken(){
        return `Login token created successfully`;
    }

}

