import React, { useState, useEffect, ComponentType } from 'react';
import { useStatus } from '../reducers/status.reducer';
import { LoadingAnimation } from './loading-animation.component';


export interface AsyncProps {

    actionName: string,
    children: any,
    errorPresenter?: (error: any) => any,
}


export const Async = (props: AsyncProps) => {

    const status = useStatus(props.actionName);
    console.log('Async status',status);
    

    if (status.status === 'EXECUTING')
        return <LoadingAnimation />
    else if (status.status === 'ERROR') {
        if (props.errorPresenter)
            return props.errorPresenter(status.error)
        else
            return <p className='text-danger error-message'>Error: {status.error.message}</p>
    }
    else {
        console.log('returinging children')
        return props.children;
    }



}
