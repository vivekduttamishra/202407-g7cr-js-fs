import React from 'react';
import { GameScoreboard } from './game-scoreboard.component';
import { Game } from './game.component';

export const GameSeries = () => {

    const _score= {
        games: 0,
        X: 0,
        O: 0,
        draw: 0,
    };

    const [score,setScore]=React.useState(_score);


    const handleGameResult = (result) => {
        score.games++;
        if(result.winner){
            score[result.winner]++;
        } else if(result.timers.O>result.timers.X){
            score.O+=0.50
            score.X+=0.25
        } else if(result.timers.O<result.timers.X){
           score.O+=0.25;
           score.X+=0.50
        }

        if(!result.winner){
            score.draw++;
        }

        setScore({ ...score });

    }


    return (
        <div className='game-series-component'>

            <GameScoreboard {...score} />
            <Game onGameResult={handleGameResult} />
        </div>
    )
};