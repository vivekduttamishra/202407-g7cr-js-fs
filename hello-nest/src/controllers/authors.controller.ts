import { Body, Controller, Delete, Get, Inject, Param, Post, Put } from "@nestjs/common";
import { AuthorService } from "../services/author-service";

@Controller("/api/authors")
export class AuthorController{

   
    constructor(@Inject("authorService") private authorService: AuthorService){
       
    }
    
    @Get()
    async getAllAuthors() {
        return await this.authorService.getAllAuthors();
    }

    @Post()
    async addAuthor(@Body() author:any) {
        return await this.authorService.addAuthor(author);
    }

    // /api/author/vivek
    @Get(':id')
    async getAuthorById(@Param('id') id: string) {
        return await this.authorService.getAuthorById(id)
    }

    @Get(':id/books')
    async getAuthorBooks(@Param('id') id: string) {
        return `Books written by Author with ID: ${id}`;
    }

    @Put(":id")
    async updateAuthor(@Param('id') id: string, @Body() author: any) {
        return await this.authorService.updateAuthor(id,author);
    }

    @Delete(":id")
    async removeAuthor(@Param('id') id: string) {
        await this.authorService.removeAuthor(id);
    }
}

