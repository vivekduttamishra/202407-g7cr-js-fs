import React,{useState, useEffect} from'react';
import { NotFound } from '../components/not-found.component';


export interface NotFoundScreenProps{


}


export const NotFoundScreen = (props:NotFoundScreenProps) => {


    return (

        <div className='NotFoundScreenComponent'>

            <NotFound/>
            
        </div>
    );

}
