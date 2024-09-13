import { Author } from "../entities/author";


export interface AuthorRepository{
    
    getAllAuthors:()=>Promise<Author[]>;
    getAuthorById:(id:string)=>Promise<Author|undefined>;
    removeAuthor:(id:string)=>Promise<void>;
    updateAuthor:(id:string,author:Partial<Author>)=>Promise<Author|undefined>;
    addAuthor:(author:Author)=>Promise<Author>;
}