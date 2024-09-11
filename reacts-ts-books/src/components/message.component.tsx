import React,{useState, useEffect} from'react';
import {  useMessageContext } from '../contexts/message.context';


export const Message = () => {

    const {message} =useMessageContext();
    const colors:any={
        "INFO":"text-primary",
        "SUCCESS":"text-success",
        "ERROR":"text-danger",
        "LOADING":"text-loading"
    }
    return (

        <div className={colors[message.type]}>
            <h4>{message.text}</h4>            
        </div>
    );

}
