import { Injectable } from '@nestjs/common';
import { SequelizeAuthorRepository } from './sequelize-author.repository';
import { Author } from 'src/models/author.model';

@Injectable()
export class AuthorService {

    constructor(private authorRepository: SequelizeAuthorRepository){}

    async addAuthor(author:Partial<Author>){
        return await this.authorRepository.createAuthor(author);
    }

    addAuthors(authors:Partial<Author[]>){
        return this.authorRepository.addAuthors(authors);
    }

    getAllAuthors(){
        return this.authorRepository.findAllAuthors();
    }

    getAuthorById(id:string){
        return this.authorRepository.findAuthorById(id);
    }

}
