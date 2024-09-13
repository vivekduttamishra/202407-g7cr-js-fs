import { Author } from '../services/author';
import { ApiAuthorService } from '../services/api-author.service';
import { reduxAction } from '../utils/action-creator';



export const authorsReducer = (authors: Author[] = [], action: any) => {
    switch (action.type) {
        case "AUTHOR_LIST":
            return action.payload;

        case "AUTHOR_REMOVE":
            return authors.filter((a: any) => a.id !== action.payload)

        case "AUTHOR_UPDATE":

            return authors.map((a: Author) => a.id === action.payload.id ? action.payload : a)

        case "AUTHOR_ADD":
            return [...authors, action.payload]

        default:
            return authors;
    }

}

export const authorReducer = (author: Author | null = null, action: any) => {
    switch (action.type) {
        case "AUTHOR_LIST":
            return null;

        case "AUTHOR_SELECT":
            return action.payload;

        case "AUTHOR_REMOVE":
            return null;

        case "AUTHOR_UPDATE":

            return action.payload;


        case "AUTHOR_ADD":
            return action.payload

        default:
            return author;
    }

}


const service= new ApiAuthorService();

//export const getAllAuthors=reduxAction(service.getAllAuthors, "AUTHOR_LIST");

export const getAllAuthors=()=>({ type:"AUTHOR_LIST", payload: service.getAllAuthors() });

export const getAuthorById=(id:string)=>({type: "AUTHOR_SELECT", payload:service.getAuthorById(id)});

export const addAuthor=(author:Author)=>({type: "AUTHOR_ADD", payload:service.addAuthor(author)});

export const removeAuthor=(id:string)=>({type: "AUTHOR_REMOVE", payload: service.removeAuthor(id)});

export const updateAuthor=(id:string,author:Author)=>({type: "AUTHOR_UPDATE", payload: service.updateAuthor(id,author)});

