import {createContext,useContext, useReducer} from 'react'
import { InMemoryAuthorService } from '../services/in-memory-author.service';
import { Author } from '../services/author';
import { ApiAuthorService } from '../services/api-author.service';
import { action } from '../utils/action-creator';
import { useStatusContext } from './status.context';

let authorContext = createContext<any>(null);
export const useAuthorContext =()=>{
    return useContext(authorContext)!; //ensure context is not null
}

//store struct
// {
//     authors:[],
//     selectedAuthor:null
// }

//Actios:  AUTHOR_LIST, AUTHOR_SELECT, AUTHOR_ADD, AUTHOR_REMOVE, AUTHOR_UPDATE

interface AuthorStore{
    authors:Author[],
    selectedAuthor: Author|null
}

const defaultStore:AuthorStore={
    authors:[],
    selectedAuthor:null
}


const authorReducer=(authorStore:AuthorStore=defaultStore,action:any)=>{
    switch(action.type){
        case "AUTHOR_LIST":
            return {
                ...authorStore,
                authors:action.payload
            }

        case "AUTHOR_SELECT":
            return {
                ...authorStore,
                selectedAuthor:action.payload
            }
        case "AUTHOR_REMOVE":
           return  {
                ...authorStore,
                authors:authorStore.authors.filter((a:any)=>a.id!==action.payload),
                selectedAuthor:null
            }

        case "AUTHOR_UPDATE":
    
            return {
                ...authorStore,
                authors:authorStore.authors.map((a:Author)=>a.id===action.payload.id?action.payload:a),
                selectedAuthor:action.payload
            }

        case "AUTHOR_ADD":
            return {
                ...authorStore,
                authors:[...authorStore.authors,action.payload],
                selectedAuthor:action.payload
            }
    }

}


export const AuthorProvider =({children}:any)=>{

    const service=new ApiAuthorService();
    const [authorStore,dispatch]=useReducer(authorReducer,defaultStore);
    const {setStatus}=useStatusContext();

    const actions={
        getAllAuthors: action(service.getAllAuthors,dispatch,setStatus,"AUTHOR_LIST"),
        getAuthorById: action(service.getAuthorById,dispatch,setStatus,"AUTHOR_SELECT"),
    }


    return <authorContext.Provider value={{...actions,...authorStore}} >
        {children}
    </authorContext.Provider>

}

