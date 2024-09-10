import React from 'react';
import { Box } from '../components/box.component';

export const GameBoard=(props)=>{

    const values=[   '_','_','_',
                     '_','_','_',
                     '_','_','_'
                ]

    const handleBoxClick=(id)=>{
        console.log(`Box #${id} clicked`);
    }

    return (
        <div className='game-board-component'>
            {
                values.map((value,index)=> <Box 
                        key={index} id={index} 
                        value={value}
                        
                        onCellClick={handleBoxClick}
                        
                        /> )
            }
        </div>
    )
}

