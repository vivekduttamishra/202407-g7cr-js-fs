import React from 'react';

interface AuthorListProps{
    authors: any[],
    onAuthorSelect: (author: any) => void
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
