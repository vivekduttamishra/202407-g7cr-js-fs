import React from 'react';

export const Box = ({ value, onCellClick, id }) => {

    let clickHandler = value ? null : () => onCellClick(id);


    return (
        <button onClick={clickHandler}
            className='box-component'>
            {value}
        </button>
    )
}
