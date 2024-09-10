
export class TicTacToeGame{

    constructor(){
        this.cells=Array(9).fill(null); //create an array of 9 null elements.
        this.currentPlayer='O';
        
        this.moves=[];
        this.moveCount=0;
        this.winner=null;   //winning combo    
    }

    get isOver(){ return this.winner || this.moveCount===9;}
    get isStalemate(){ return !this.winner && this.moveCount===9;}
    get winningPlayer(){ return this.winner?this.cells[this.winner[0]]:null}

    move=(position)=>{

        //reject move to a cell that is occupied.
        if(this.cells[position] || this.isOver)
            return false; 

        //update the cell.
        this.cells[position]=this.currentPlayer;
        this.moveCount++
        //update move list
        this.moves.push({moveCount:this.moveCount, position:position, player:this.currentPlayer})

        this.currentPlayer= this.currentPlayer==='O'?'X':'O';
        //check for winner/game over
        this.checkStatus();
        return true; //move made
    }

    checkStatus=()=>{
        const winningCombos=[
            //row wins
            [0,1,2],
            [3,4,5],
            [6,7,8],
            //column wins
            [0,3,6],
            [1,4,7],
            [2,5,8],
            //diagonal wins
            [0,4,8],
            [2,4,6]
        ]

        //winning combos are actually cell indices for winning cells
        //if any of these combox has matching cell.

        this.winner = winningCombos.find( combo=>{
            var [x,y,z]= combo; //index of cells that should have same not null value
            return this.cells[x] && this.cells[x]===this.cells[y] && this.cells[y]===this.cells[z];
        });       


    }


}