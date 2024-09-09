import React,{useState, useEffect} from'react';

import { useParams } from 'react-router-dom';

import { Author } from '../../services/author';


export interface AuthorDetailsScreenProps{
    

}


export const AuthorDetailsScreen = (props:AuthorDetailsScreenProps) => {

    type OptionalAuthor= Author|undefined;
    let author: OptionalAuthor;

    let {id} = useParams();


    if(!author)
        return <h2>Searching for Id:{id}</h2>;

    

    return (

        <div className='AuthorDetailsScreenComponent'>
          
            <h2>{author.name}</h2>
            <div className="row">
                <div className="col col-sm-12 col-xs-12 col-md-6 col-lg-3">
                    <img src={author.photo} alt={author.name} className="author-photo"/>
                </div>
                <div className="col col-sm-12 col-xs-12 col-md-6 col-lg-9">
                    <h3>Biography</h3>
                    <p>{author.biography}</p>
                    <hr/>
                    Tags: {author.tags}
                </div>
            </div>

        </div>
    );

}
