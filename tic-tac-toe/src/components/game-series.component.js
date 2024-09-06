import React from 'react';
import { GameScoreboard } from './game-scoreboard.component';
import { Game } from './game.component';
import { Clock } from './clock.component';

export class GameSeries extends React.Component{

    state={
        games:0,
        X:0,
        O:0,
        draw:0,
        showClock:false,
    }

    handleGameResult=(winner)=>{
        var newState={...this.state};
        if(winner)
            newState[winner]++;
        else
            newState.draw++;

        newState.games++;

        this.setState({...newState});

    }

    render =()=>{        

        const handleToggle=()=>{
            this.setState({showClock:!this.state.showClock})
        }

        return (
            <div className='game-series-component'>
                
               <GameScoreboard {...this.state} />
               <Game onGameResult={this.handleGameResult}/>
            </div>
        )
    }
};