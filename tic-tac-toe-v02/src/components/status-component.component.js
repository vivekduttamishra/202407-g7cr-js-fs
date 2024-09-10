import React from 'react';

export const Status=({message, color='blue'})=>{

    return (
        <h2 
            style={{color}}
            className='status-component'>
           {message}
        </h2>
    )
};

