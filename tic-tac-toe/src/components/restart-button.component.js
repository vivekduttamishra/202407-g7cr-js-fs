import React from 'react';

export const RestartButton=({onRestart})=>{

    // if(!onRestart)
    //     return null; //do not display any ui

    let style={}; //default style from css

    if(!onRestart){

        onRestart=null;
        style={
            backgroundColor: "gray",
            cursor: 'not-allowed',
        }
    }

    return (
        <button style={style}
            onClick={onRestart} 
            className='restart-component'>
                Play Again!
            </button>
    )
};