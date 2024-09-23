import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Author } from 'src/models/author.model';
import { AuthorService } from './author.service';


@Controller('/api/authors')
export class AuthorsController {

    constructor(private authorService: AuthorService){}  // Inject the AuthorService

    @Get()
    async getAllAuthor() {
        return await this.authorService.getAllAuthors();
    }

    @Get(":id")
    async getAuthorById(@Param('id') id:string) {
        return await this.authorService.getAuthorById(id);
    }

    @Post()
    async addAuthor(@Body() author:any){

        return await this.authorService.addAuthor(author);

    }

    @Post()
    async addAuthors(@Body() authors:any[]){
        return await this.authorService.addAuthors(authors);
    }

   


}
