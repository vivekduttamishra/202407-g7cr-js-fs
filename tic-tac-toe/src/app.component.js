import React from 'react';
import './app.css'
import {AppHeader} from './components/app-header.component';
import { Game } from './components/game.component';
import { GameSeries } from './components/game-series.component';
import { Clock } from './components/clock.component';


export const App = () => {

    return (
        <div>
            <AppHeader title="Tic Tac Toe" slogan="Let the game begin..." />
            
            <GameSeries/>
        </div>
    );
};


