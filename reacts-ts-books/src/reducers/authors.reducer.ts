import { Author } from '../services/author';
import { ApiAuthorService } from '../services/api-author.service';
import { setStatus } from './status.reducer';



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







export const authorReducerActions:any={
    intialState:null,
    authorList(){      //action.type "authorList"
        return null;
    },
    authorSelect(author:Author){ //action.type "authorSelect"
        return {...author};
    },
}

export const newAuthorReducer=(state:any,action:any)=>{

    if(authorReducerActions[action.type]){
        const result =authorReducerActions[action.type](action.payload);
        return result;
    }else{
        return state;
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

export const getAllAuthors=()=>{
    
    return { type:"AUTHOR_LIST", payload: service.getAllAuthors() }
}

export const getAuthorList= async ()=>{
    const authors= await service.getAllAuthors();

    return {type:"AUTHOR_LIST", payload: authors};
}

export const getAuthorById=(id:string)=>{
    return {type: "AUTHOR_SELECT", payload:service.getAuthorById(id)}
}

export const getAuthorById2=(id:string)=>{

    return async (dispatch:any)=>{
        try{
            const author = await service.getAuthorById(id);
            dispatch({type:"AUTHOR_SELECT", payload:author});
        }catch(err){
            dispatch({type:"AUTHOR_SELECT", payload:undefined});
        }   
    }
}



export const addAuthor=(author:Author)=>{

    return async (dispatch:any)=>{
        try{

            dispatch(setStatus("AUTHOR_ADD","PENDING"))
            const result =await service.addAuthor(author);
            dispatch(setStatus("AUTHOR_ADD","SUCCESS"));
        }catch(err){
            dispatch(setStatus("AUTHOR_ADD","ERROR",err));
        }
    }

}

export const removeAuthor=(id:string)=>({type: "AUTHOR_REMOVE", payload: service.removeAuthor(id)});

export const updateAuthor=(id:string,author:Author)=>({type: "AUTHOR_UPDATE", payload: service.updateAuthor(id,author)});

