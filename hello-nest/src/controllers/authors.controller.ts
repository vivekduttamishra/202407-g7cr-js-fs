import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";

@Controller("/api/authors")
export class AuthorController{
    
    @Get()
    async getAllAuthors() {
        return ['John Doe', 'Jane Doe'];
    }

    @Post()
    async addAuthor(@Body() author:any) {
        return {
            status:'success',
            author
        };
    }

    // /api/author/vivek
    @Get(':id')
    async getAuthorById(@Param('id') id: string) {
        return `Author with ID: ${id}`;
    }

    @Get(':id/books')
    async getAuthorBooks(@Param('id') id: string) {
        return `Books written by Author with ID: ${id}`;
    }

    @Put(":id")
    async updateAuthor(@Param('id') id: string, @Body() author: any) {
        return {
            status:'success',
            id,
            author
        }
    }
}

