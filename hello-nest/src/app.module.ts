import { Module } from "@nestjs/common";
import { AppController } from "./controllers/app.controller";
import { AuthorController } from "./controllers/authors.controller";
import { TokenController, UserController } from "./controllers/user.controller";
import {InMemoryAuthorRepository} from './repositories/in-memory-author-repository';
import {SimpleAuthorService} from './services/simple-author-service';
import { InMemoryUserRepository } from "./repositories/in-memory-user-repository";
import { SimpleUserService } from "./services/simple-user-service";



@Module({
    controllers:[
        AppController,
        AuthorController,
        UserController,
        TokenController
    ],
    providers:[
        {
            provide:"authorRepository",  //this is what user wants
            useClass: InMemoryAuthorRepository //provide this class
        },
        {
            provide:"authorService",  //this is what user wants
            useClass: SimpleAuthorService //provide this class
        },

        {
            provide:"userRepository",
            useClass:InMemoryUserRepository
        },
        {
            provide:"userService",
            useClass:SimpleUserService
        },
    
    ]
})
export class AppModule{

}



