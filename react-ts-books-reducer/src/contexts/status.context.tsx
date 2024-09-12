import React from 'react';

type StatusType="INFO"|"ERROR"|"SUCCESS"|"READY"|"LOADING"

export interface Status{
    type:StatusType,
    text:string
    action:string
}

interface StatusContext{
    status:Status,
    setStatus:(message:string,type:StatusType,action:string)=>void;
}


const defaultStatus:Status={type:"READY", text:"","action":""};

const statusContext= React.createContext<StatusContext>(
                {
                    status:defaultStatus,
                    setStatus:(message:string,type:StatusType,action:string)=>{}
                });


export const useStatusContext=()=> React.useContext(statusContext);

const statusReducer=(message:Status, action:any)=>{
    if(action.type==="STATUS"){
        return action.payload;        
    }else{
        return message;
    }
}


export const StatusProvider=({children}:any)=>{

    const [message, dispatch]=React.useReducer(statusReducer,defaultStatus);

    const setStatus=(text:string, type:StatusType="INFO", action:String="")=>{
        
        dispatch({type:"STATUS", payload:{type, text, action}});
    }

    return <statusContext.Provider value={{status: message,setStatus: setStatus}}>
        {children}
    </statusContext.Provider>

}