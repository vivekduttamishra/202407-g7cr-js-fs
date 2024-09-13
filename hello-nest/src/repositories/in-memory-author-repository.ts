
import { Author } from '../entities/author';
import {NotFoundException}  from '../utils/not-found-exception';
import { AuthorRepository } from './author-repository';




var authors:Author[]= [
    {id: 'vivek-dutta-mishra', name:'Vivek Dutta Mishra',biography:'Author of the Lost Epic Series'},
    {id:'dinkar', name:'Ramdhari Singh Dinkar',biography:'National Poet of India'},
]

export class InMemoryAuthorRepository implements AuthorRepository{

    
    getAllAuthors=async()=>{
        return authors;

    }

    getAuthorById=async (id:string)=>{
        let author= authors.find(author => author.id === id);
        return author;
    }

    addAuthor=async(author:Author)=>{
        
        authors.push(author);
        return author;
    }
    removeAuthor=async(id:string)=>{
        authors=authors.filter(author => author.id !== id);
    }

    updateAuthor=async(id:string,author:Partial<Author>)=>{

        let originalAuthor = await this.getAuthorById(id);
        if(!originalAuthor)
            return undefined;
        
        let updatedAuthor = {...originalAuthor, ...author};

        authors=authors.map(dbAuthor => dbAuthor.id === id?updatedAuthor:dbAuthor);
        
        return updatedAuthor;
    }
   

}

