import React from 'react';
import { withVisibility } from '../hocs/with-visibility';
import { Authenticated } from './authenticated.component';

interface AuthorDetailsProps{
    author?: any,
    onAuthorDelete?: (id:string)=>void;
}

let _AuthorDetails=({author,onAuthorDelete}:AuthorDetailsProps)=>{

    if(!author)
        return <h2>Select An Author</h2>

    return (
        <div>
           <h2>{author.name}</h2>
           <div className='row'>
                <div className='col col-md-4'>
                    <img className='author-image' src={author.photo} alt={author.name}/>
                    <p/>
                    <Authenticated roles={['moderator','admin']}>
                        <button className="btn btn-danger">Delete</button>
                    </Authenticated>
                </div>
                <div className='col col-md-8'>
                    <h3>Biography</h3>
                    <p>{author.tags?.join(',')}</p>
                    <hr/>
                    <p>{author.biography}</p>
                </div>
           </div>
        </div>
    )
}

export const AuthorDetails=withVisibility(_AuthorDetails);