import React from 'react';
import './app.css'
import { TicTacToe } from './components/tic-tac-toe.component';
import {AppHeader} from './components/app-header.component';


export const App = () => {

    return (
        <div>
            <AppHeader title="Tic Tac Toe" slogan="Let the game begin..." />
            <TicTacToe/>
        </div>
    );
};


