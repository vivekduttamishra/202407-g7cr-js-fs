import React from 'react';
import { Box } from './box.component';

export class GameBoard extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            cells: [

                null, null, null,
                null, null, null,
                null, null, null
            ],
            next:"O"
        };

    }
    
    handleBoxClick = (id) => {
        //console.log(`Box #${id} clicked`);
        //generally we don't modify original state object
        let updatedCells = [...this.state.cells]; //create an exact copy of current cells
        updatedCells[id]=this.state.next; //update the cell for currnt box
        let next = this.state.next==='O'?'X':'O'; //toggle next for future
        this.setState({cells: updatedCells, next: next}); //call setState
    }

    render=()=>{

        return(
            <div className = 'game-board-component' >
            {
                this.state.cells.map((value, index) => <Box
                    key={index} id={index}
                    value={value}
    
                    onCellClick={this.handleBoxClick}
    
                />)
            }
            </div>
        )
    }

}

