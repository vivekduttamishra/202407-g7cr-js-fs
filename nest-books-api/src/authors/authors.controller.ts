import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { Author } from '../models/author.model';
import { AuthorService } from './author.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';


@Controller('/api/authors')
export class AuthorsController {

    constructor(private authorService: AuthorService){}  // Inject the AuthorService

    @Get()
    async getAllAuthor() {
        return await this.authorService.getAllAuthors();
    }

    @Get(":id")
    @UseGuards(JwtAuthGuard)
    async getAuthorById(@Param('id') id:string) {
        return await this.authorService.getAuthorById(id);
    }

    @Post()
    @UseGuards(JwtAuthGuard)
    async addAuthor(@Body() author:any){

        return await this.authorService.addAuthor(author);

    }

    @Post()
    async addAuthors(@Body() authors:any[]){
        return await this.authorService.addAuthors(authors);
    }

   


}
