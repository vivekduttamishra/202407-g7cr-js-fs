

// const statusFormat={
//     AUTHOR_LIST: {status:"PENDING"|"SUCCESS"|"ERROR", error:any,actioName:'AUTHOR_LIST' }
// }

import { useSelector } from "react-redux";

export const statusReducer=(status:any={}, action:any)=>{
    if(action.type==='STATUS'){
        return {...status, 
            [action.payload.actionName]:action.payload
        }
    }
    return status;
}

export const setStatus=(actionName:string, status:string, error:any=null)=>{
    return {type:'STATUS', payload:{actionName,status,error}};
}

export const useStatus=(actionName:string)=>{

    const status= useSelector((store:any)=>store.status);
    return status[actionName] ;

}
