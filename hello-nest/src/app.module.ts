import { Module } from "@nestjs/common";
import { AppController } from "./controllers/app.controller";
import { AuthorController } from "./controllers/authors.controller";
import { TokenController, UserController } from "./controllers/user.controller";
import {InMemoryAuthorRepository} from './repositories/in-memory-author-repository';
import {AuthorService} from './services/author-service';



@Module({
    controllers:[
        AppController,
        AuthorController,
        UserController,
        TokenController
    ],
    providers:[
        InMemoryAuthorRepository,
        AuthorService
    ]
})
export class AppModule{

}



