import React,{useState, useEffect} from'react';
import { withVisibility } from '../hocs/with-visibility';


export interface LoadingAnimationProps{
    image?:string;
    message?:string;
}


const _LoadingAnimation = ({image="/images/loading.gif",message}:LoadingAnimationProps) => {

    return (

        <div className='LoadingAnimationComponent'>
            <img src={image} alt='loading...' title={message || 'loading...'} />
            { message && <span>{message}</span>}
        </div>
    );

}

export const LoadingAnimation=withVisibility(_LoadingAnimation,true);
