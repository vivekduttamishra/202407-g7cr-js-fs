import React from 'react';
import { Status } from './status-component.component';
import { GameBoard } from './game-board.component';
import { RestartButton } from './restart-button.component';
import { GameMoves } from './game-moves.component';
import { TicTacToeGame } from '../services/tic-tac-toe-game.service';

export class Game extends React.Component {



    constructor(props) {
        super(props)

        this.game=new TicTacToeGame();

        this.state=this.fetchGameState;
        //console.log('this.state',this.state);
        

    }

    get fetchGameState(){
        let state= {
            ...this.game,
            next:this.game.currentPlayer,
            isOver:this.game.isOver,
            winningPlayer:this.game.winningPlayer,
            isStalemate:this.game.isStalemate,
            
        }; 
        
        if(this.game.winner){
            state.message=`'${this.game.winningPlayer}' Wins`
        } else if(this.game.isStalemate)
            state.message=`Stalemate`
        else
            state.message=`Next Player '${this.game.currentPlayer}'`;
    
        return state;
    }


    handleMove=(id)=>{

        if(this.game.move(id)===false)
            return;

        this.setState({
            ...this.fetchGameState,
        });

        if(this.game.isOver){
            this.props.onGameResult(this.game.winningPlayer);
        }

    }

    
    
    
    reStart=()=>{
        console.log('restarting');       
        this.game=new TicTacToeGame();
        this.setState({
            ...this.fetchGameState
        });
    }
    

    render = () => {

        return (
            <div className='body'>
                <div className='game-component'>
                    <Status
                        message={this.state.message}
                    />
                    {
                       this.game.isOver  
                            && <RestartButton onRestart={this.game.isOver && this.reStart} />
                            
                    }
                    <div className="same-row">
                        <GameBoard
                            winner={this.state.winner}
                            cells={this.state.cells}
                            onCellClick={this.handleMove}
                        />
                        <GameMoves
                            moves={this.state.moves}
                        />
                    </div>
                </div>
            </div>
        )
    }



    handleMove_v1 = (id) => {
        
        
        //Phase #1 Update state about current move
        //Phase #1.1 Update cells
        let updatedCells = [...this.state.cells]; //create an exact copy of current cells
        updatedCells[id] = this.state.next; //update the cell for currnt box
        
        this.setState({ cells: updatedCells }); //call setState
        let player=this.state.next;
        
        
        //Phase #1.2. Add current move to move list
        this.moveCount++;
        let moves = [
            ...this.state.moves,
            {
                moveCount: this.moveCount,
                position: id,
                player
            }
        ];        
        this.setState({ moves })
        
        //Phase #2 Prepare for the next move
        //Phase #2.1 chose next player
        let next = player === 'O' ? 'X' : 'O'; //toggle next for future
        this.setState({next});

        //Phase #2.2 update status about next
        let message = `Next Move: "${next}"`;
        this.setState({ message: message });
    }
}


