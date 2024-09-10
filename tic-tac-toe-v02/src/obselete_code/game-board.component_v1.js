import React from 'react';
import { Box } from '../components/box.component';

export const GameBoard=(props)=>{

    let boxes=[];
    for(let i=0;i<9;i++){
        boxes.push(     
        <Box value='_' />    
        )
    }

    return (
        <div className='game-board-component'>
            {boxes}
        </div>
    )
}

