import { Body, Controller, Get, Post } from '@nestjs/common';
import { Author } from 'src/models/author.model';


@Controller('/api/authors')
export class AuthorsController {

    @Get()
    async getAllAuthor() {
        return await Author.findAll();
    }

    @Post()
    async addAuthor(@Body() author:any){

        const result =await Author.create(author);
        return result;

    }


}
