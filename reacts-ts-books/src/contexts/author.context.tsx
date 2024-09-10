import {createContext,useContext} from 'react'
import { InMemoryAuthorService } from '../services/in-memory-author.service';

let authorContext = createContext<InMemoryAuthorService|null>(null);

//this is a custom user defined hook.
//any function that calls a hook becomes a hook (or component)
export const useAuthorContext =()=>{
    return useContext(authorContext)!; //ensure context is not null
}

export const AuthorProvider =({children}:any)=>{

    var service=new InMemoryAuthorService();
    return <authorContext.Provider value={service} >
        {children}
    </authorContext.Provider>

}

