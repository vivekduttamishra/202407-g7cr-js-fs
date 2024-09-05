import React from 'react';

export const Box=({value,id})=>{
   
    var info="Hi";
    const clickHanlder=()=>{
        console.log(`Box ${id} clicked with value ${value}`);
        info="Hello";
        console.log(`value modified to ${info}`);  
          
    }

    return (
        <button onClick={clickHanlder} 
                className='box-component'>
           {info}
        </button>
    )
};