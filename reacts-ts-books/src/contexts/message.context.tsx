import React from 'react';

type MessageType="INFO"|"ERROR"|"SUCCESS"|"READY"

export interface Message{
    type:MessageType,
    text:string
}

interface MessageContext{
    message:Message,
    setMessage:(message:string,type:MessageType)=>void;
}


const defaultMessage:Message={type:"READY", text:""};

const messageContext= React.createContext<MessageContext>(
                {
                    message:defaultMessage,
                    setMessage:(message:string,type:MessageType)=>{}
                });


export const useMessageContext=()=> React.useContext(messageContext);

const messageReducer=(message:Message, action:any)=>{
    if(action.type==="MESSAGE"){
        return action.payload;        
    }else{
        return message;
    }
}


export const MessageProvider=({children}:any)=>{

    const [message, dispatch]=React.useReducer(messageReducer,defaultMessage);

    const setMessage=(text:string, type:MessageType="INFO")=>{
        dispatch({type:"MESSAGE", payload:{type, text}});
    }

    return <messageContext.Provider value={{message,setMessage}}>
        {children}
    </messageContext.Provider>

}