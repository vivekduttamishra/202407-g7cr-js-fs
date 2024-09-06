import React from 'react';




export const If=({condition, children})=>{

    if(condition)
        return children;  
    else
        return null;
};