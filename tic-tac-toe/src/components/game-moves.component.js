import React from 'react';

const Move = ({ move }) => {
    return (<tr >
        <td>
            {move.moveCount}
        </td>
        <td>
            {move.position}
        </td>
        <td>
            {move.player}
        </td>
    </tr>
    );
}


export const GameMoves = ({ moves }) => {

    return (
        <div className='game-moves-component'>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Position</th>
                        <th>Player</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        moves.map(move => <Move 
                                    key={move.moveCount} 
                                    move={move}/>)
                    }



                </tbody>
            </table>
        </div>
    )
};