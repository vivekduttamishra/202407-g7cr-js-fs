import React from 'react';
import { Status } from './status-component.component';
import { GameBoard } from './game-board.component';
import { RestartButton } from './restart-button.component';

export const TicTacToe=(props)=>{

    return (
        <div className='body'>
            <div className='tic-tac-toe-component'>
                <Status/>
                <GameBoard/>
                <RestartButton/>
            </div>
        </div>
    )
};