import React from 'react';
import { Box } from './box.component';


  

export const GameBoard=({cells,onCellClick,winner})=>{

    return(
        <div className = 'game-board-component' >
        {
            cells.map((value, index) => <Box
                key={index} id={index}
                value={value}
                winner={winner}
                onCellClick={onCellClick}

            />)
        }
        </div>
    )
}


