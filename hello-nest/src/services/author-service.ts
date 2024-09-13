import { Author } from "../entities/author";


export interface AuthorService{

    getAllAuthors:()=>Promise<Author[]>;
    getAuthorById:(id:string)=>Promise<Author>;
    removeAuthor:(id:string)=>Promise<void>;
    updateAuthor:(id:string,author:Author)=>Promise<Author>;
    addAuthor:(author:Author)=>Promise<Author>;

}