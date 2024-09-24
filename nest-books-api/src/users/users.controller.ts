import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { User } from 'src/models/user.model';
import { UserService } from './user.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RolesGuard } from 'src/auth/roles.guard';
import { Roles } from 'src/auth/roles.decorator';
// import { Roles } from 'src/auth/roles.decorator';
// import { RolesGuard } from 'src/auth/roles.guard';

@Controller()
  
export class UsersController {

    constructor(private userService:UserService){}

    @Get('/api/users')
    @UseGuards(JwtAuthGuard,RolesGuard)
    @Roles('admin')  
    getAllUsers(){
        return this.userService.getAllUsers();
    }

    @Post('/api/users')
    register(@Body() user:User){
        return this.userService.register(user);
    }
    
    @Post('/api/token')
    login(@Body() user:{email:string, password:string}){
        return this.userService.login(user.email, user.password);
    }

    @Delete('/api/users/:email')   
    @HttpCode(204) 
    removeUser(@Param('email') email:string){
        return this.userService.removeUser(email);
    }

    @Patch('/api/users/:email/roles')
    updateRoles(@Param('email') email:string, @Body() data: any){
        return this.userService.updateRoles(email, data);
    }
}
