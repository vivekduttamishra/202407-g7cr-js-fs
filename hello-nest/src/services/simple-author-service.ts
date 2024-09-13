import { NotFoundException } from "../utils/not-found-exception";
import {  InMemoryAuthorRepository } from "../repositories/in-memory-author-repository";
import { ValidationException } from "../utils/validation-exception";
import { Author } from "../entities/author";
import { AuthorRepository } from "../repositories/author-repository";
import { AuthorService } from "./author-service";
import { Inject } from "@nestjs/common";



export class SimpleAuthorService implements AuthorService{

    constructor(@Inject("authorRepository") private authorRepository:AuthorRepository){
        
    }

    getAllAuthors=async ()=>{
        return await this.authorRepository.getAllAuthors();
    }

    getAuthorById=async(id:string)=>{

        var author =await this.authorRepository.getAuthorById(id);
        if(!author)
            throw new NotFoundException("Invalid Author Id",{id})
        return author;
    }  

    _validate= (author:Author)=>{
        if(!author.name)
            throw new ValidationException("Invalid Author Info",{error:'Author Name is Required'})
        if(!author.biography)
            throw new ValidationException("Invalid Author Info",{error:'Author Biography is Required'});
    }

    addAuthor=async(author:Author)=>{
        
        this._validate(author);

        if(!author.id){
            author.id=author.name.split(' ').join('-').toLowerCase();
        }

        return await this.authorRepository.addAuthor(author);
    }
    
    removeAuthor=async(id:string)=>{
        
        return await this.authorRepository.removeAuthor(id);
    }

    updateAuthor=async(id:string, author:Partial<Author>)=>{
        
        const updatedAuthor= await this.authorRepository.updateAuthor(id, author);
        if(!updatedAuthor)
            throw new NotFoundException("Invalid Author Id",{id})
        return updatedAuthor;
    }

    


}


