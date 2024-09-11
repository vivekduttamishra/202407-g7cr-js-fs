import React, { useState, useEffect } from 'react';
import { Author } from '../services/author';
import { Link } from 'react-router-dom';


export interface AuthorCardProps {

    author: Author

}


export const AuthorCard = ({ author }: AuthorCardProps) => {

    const width='250px'
    const style={
        width,
        
    }

    const imageStyle={
        width,
    }

    //const bio= author.biography.length>50?`${author.biography.substring(0,50)}...`:author.biography;
    return (

        <div className="card mb-3" style={style}>
            <img src={author.photo} style={imageStyle} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{author.name}</h5>
                    <p className="card-text">{author.biography.substring(0,50)}</p>
                    <Link className="btn btn-default" to={`/author/details/${author.id}`}>More...</Link>
                </div>
        </div>
    );

}
