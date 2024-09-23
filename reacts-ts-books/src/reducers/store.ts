import { applyMiddleware, combineReducers, createStore } from "redux";
import { authorsReducer,authorReducer } from "./authors.reducer";
import { userReducer } from "./user.reducer";
import { statusReducer } from "./status.reducer";
//import { asyncPayload, log } from "../utils/async-payload";

const logActions = (store:any)=>(next:any)=>(action:any)=>{

    console.log('action',action);
    console.log('store before action',store.getState());
    
    next(action); //pass to next middleware/reducer.
    console.log('store afer action',store.getState());
    

}

const promisedAction=(store:any)=>(next:any)=>(action:any)=>{

    if(action instanceof Promise){
        console.log('Waiting for promise to complete');
        action.then( realAction =>{
            store.dispatch(realAction);
        }).catch(error=>{
            store.dispatch({type:'ERROR', payload:error});
        })

    }else{
        next(action); //do what you do anyway.
    }


}



const store:any = combineReducers({
    authors:authorsReducer,
    author:authorReducer,
    user:userReducer,
    status:statusReducer
 });

 export default createStore(
    store,
    //applyMiddleware(log(),asyncPayload)
    applyMiddleware(logActions,promisedAction)
 
);