import React,{useState, useEffect} from'react';
import { withFieldset } from '../hocs/with-fieldset';
import { withVisibility } from '../hocs/with-visibility';


export interface AuthorInfoProps{

    author:any;
}


export const AuthorInfo = ({author}:AuthorInfoProps) => {


    return (

        <div className='AuthorInfoComponent'>
            <h2>About {author.name}</h2>            
        </div>
    );

}


export default withVisibility( 
                    withFieldset(AuthorInfo, "About Author")
                );