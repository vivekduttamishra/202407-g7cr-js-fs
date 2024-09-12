import React, { useState, useEffect } from 'react';
import { Author } from '../../services/author';
import { AuthorCard } from '../../components/author-card.component';
import { useAuthorContext } from '../../contexts/author.context';
import { LoadingAnimation } from '../../components/loading-animation.component';
import { useStatusContext } from '../../contexts/status.context';
import { Status } from '../../components/status.component';


export interface AuthorListScreenProps {

}




export const AuthorListScreen = () => {

    const {authors, getAllAuthors}= useAuthorContext();
    const {status}=useStatusContext();

    console.log('status',status);
    
    
    //get all authors
    useEffect(getAllAuthors,[]);

    if(status.type!=='SUCCESS'){
        return <Status/>
    }

    return (

        <div className='AuthorListScreenComponent'>
            <h2>Author List Screen</h2>
            <div className='row'>
                {



                    authors.map((author:Author) => (
                        <div key={author.id} className='col col-md-4'>
                            <AuthorCard author={author} />
                        </div>
                    ))
                }
            </div>

        </div>
    );

}
