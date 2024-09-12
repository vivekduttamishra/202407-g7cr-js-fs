import React,{useState, useEffect} from'react';
import { LoadingAnimation } from './loading-animation.component';
import { useStatusContext } from '../contexts/status.context';


export const Status = () => {

    const {status} =useStatusContext();
    const colors:any={
        "INFO":"text-primary",
        "SUCCESS":"text-success",
        "ERROR":"text-danger",
        "LOADING":"text-secondary"
    }

   if(status.type==="LOADING")
        return <LoadingAnimation/>;

    return (

        <div className={colors[status.type]}>
            <h4>{status.text}</h4>            
        </div>
    );

}
