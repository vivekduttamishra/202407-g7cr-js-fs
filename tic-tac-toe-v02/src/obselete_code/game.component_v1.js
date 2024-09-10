import React from 'react';
import { Status } from './status-component.component';
import { GameBoard } from './game-board.component';
import { RestartButton } from './restart-button.component';
import { GameMoves } from './game-moves.component';

export class Game extends React.Component {



    constructor(props) {
        super(props)

        this.state = {
            cells: [

                null, null, null,
                null, null, null,
                null, null, null
            ],
            next: "O",

            moves: []


        };

        this.moveCount = 0; //not used in UI.
        this.state.message = `Next Move: "${this.state.next}"`

    }

    handleMove = (id) => {
        

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


    render = () => {

        return (
            <div className='body'>
                <div className='game-component'>
                    <Status
                        message={this.state.message}
                    />
                    <RestartButton />
                    <div className="same-row">
                        <GameBoard
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
}


