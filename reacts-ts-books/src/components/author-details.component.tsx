import React from 'react';

interface AuthorDetailsProps{
    author?: any,
    onAuthorDelete?: (id:string)=>void;
}

export const AuthorDetails=({author,onAuthorDelete}:AuthorDetailsProps)=>{

    if(!author)
        return <h2>Select An Author</h2>

    return (
        <div>
           <h2>{author.name}</h2>
           {
            onAuthorDelete &&
            <button
                onClick={()=>onAuthorDelete(author.id)}
                className='btn btn-danger'
            >Delete</button>
           }
        </div>
    )
}
