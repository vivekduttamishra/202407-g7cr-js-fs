import React from 'react';
import { Author } from '../services/author';

interface AuthorListProps{
    authors: any[],
    onAuthorSelect: (author: Author|null) => void 
}

export const AuthorList=(props:AuthorListProps)=>{

    
   


    return (
        <div className='list-group'>
            {props.authors.map(author=>(
              <button key={author.id} 
              onClick={()=>props.onAuthorSelect(author)}
              className="list-group-item list-group-item-action"
              >{author.name}</button>
            ))}
        </div>
    )
}
