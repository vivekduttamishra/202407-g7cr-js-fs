import React from 'react';

export const PlayButton = ({ onClick,disabled }) => {

    return (
        <button 
            onClick={onClick}
            disabled={disabled}
            className='play-button'
            >
            Play!
        </button>
    )

}