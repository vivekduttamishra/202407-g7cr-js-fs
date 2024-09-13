import { NotFoundException } from "../utils/not-found-exception";
import { Author, InMemoryAuthorRepository } from "../repositories/in-memory-author-repository";
import { ValidationException } from "../utils/validation-exception";



export class AuthorService{

    constructor(private authorRepository:InMemoryAuthorRepository){
        
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
        //should validate author properties here.
        this._validate(author);

        // if(!author.id){
        //     author.id=author.name.split(' ').join('-').toLowerCase();
        // }

        return await this.authorRepository.addAuthor(author);
    }
    
    removeAuthor=async(id:string)=>{
        
        return await this.authorRepository.removeAuthor(id);
    }

    updateAuthor=async(id:string, author:Author)=>{
        this._validate(author);
        return await this.authorRepository.updateAuthor(id, author);
    }

    


}


module.exports = AuthorService;