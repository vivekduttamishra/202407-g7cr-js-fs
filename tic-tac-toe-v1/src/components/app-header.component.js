import React from 'react';

export const AppHeader=({title,slogan})=>{

   

    return (
        <div className='header' >
            <h1>{title}</h1>
            <p>{slogan}</p>
        </div>
    )
};