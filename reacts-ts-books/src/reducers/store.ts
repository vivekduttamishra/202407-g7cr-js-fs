import { applyMiddleware, combineReducers, createStore } from "redux";
import { authorsReducer,authorReducer } from "./authors.reducer";
import { userReducer } from "./user.reducer";
import { statusReducer } from "./status.reducer";
import { funcAction, logActions, promisedAction, promisedPayload } from "../utils/redux-middlewares";
//import { asyncPayload, log } from "../utils/async-payload";




const store:any = combineReducers({
    authors:authorsReducer,
    author:authorReducer,
    user:userReducer,
    status:statusReducer
 });

 export default createStore(
    store,
    //applyMiddleware(log(),asyncPayload)
    applyMiddleware(
        //logActions('AUTHOR_SELECT','AUTHOR_LIST'),
        promisedAction
        ,promisedPayload, 
        funcAction
    )
 
);