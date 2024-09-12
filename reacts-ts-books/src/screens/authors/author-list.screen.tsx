import React, { useState, useEffect } from 'react';
import { Author } from '../../services/author';
import { AuthorCard } from '../../components/author-card.component';
import { useAuthorContext } from '../../reducers/authors';
import { LoadingAnimation } from '../../components/loading-animation.component';
import { useStatusContext } from '../../reducers/status.context';
import { Status } from '../../components/status.component';
import { getAllAuthors } from '../../reducers/authors.reducer';
import { connect, useDispatch, useSelector } from 'react-redux';
import { ApiAuthorService } from '../../services/api-author.service';


export interface AuthorListScreenProps {

}


const service =new ApiAuthorService();

export const AuthorListScreen = (props:any) => {
    console.log('props',props);
    //const {authors, getAllAuthors}= useAuthorContext();
    
    const dispatch = useDispatch();
    const authors= useSelector((store:any)=>store.authors);
    
    //get all authors
    //useEffect(getAllAuthors,[]);

    // useEffect(()=>{
    //     props.getAllAuthors();
    // },[]);

    useEffect(()=>{
        service
            .getAllAuthors()
            .then(authors=>dispatch({type:'AUTHOR_LIST',payload:authors}))
    },[]);

    
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

const reduxStoreToProps = (store:any)=>{
    return{
        authors:store.authors
    }
}

//export default connect(reduxStoreToProps,{getAllAuthors})(AuthorListScreen);

export default AuthorListScreen;