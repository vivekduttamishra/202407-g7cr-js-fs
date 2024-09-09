import React,{useState, useEffect} from'react';


export interface NotFoundProps{
    message?:string;

}


export const NotFound = ({message="Not Found"}:NotFoundProps) => {


    return (

        <div className='NotFoundComponent'>

            <h2>{message}</h2>

            
        </div>
    );

}
