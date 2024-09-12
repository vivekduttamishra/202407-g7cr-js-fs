import { combineReducers, createStore } from "redux";
import { authorsReducer,authorReducer } from "./authors.reducer";
import { userReducer } from "./user.reducer";


const store:any = combineReducers({
    authors:authorsReducer,
    author:authorReducer,
    user:userReducer,
 });

 export default createStore(store);