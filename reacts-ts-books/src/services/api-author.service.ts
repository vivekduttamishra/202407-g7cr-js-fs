import { delay } from "../utils/delay";
import { Author } from "./author";
import axios from "axios";

const url='http://localhost:8000/api/authors';

export class ApiAuthorService{
    
    

    getAllAuthors=async ()=>{
        const data = await axios.get(url);
        return data.data;
    }

    getAuthorById=async (id?:string)=>{
        
        var authors=await this.getAllAuthors();
        var result= authors.find((author:Author)=>author.id===id);
        if(result)
            return result;
        else
            throw new Error(`Invalid Author Id ${id}`);
    }

    addAuthor=async(author:Author)=>{
      
    }

    removeAuthor=async(id:string)=>{
       
    }

    updateAuthor=async (id:string,author:Author)=>{
        
    }
}