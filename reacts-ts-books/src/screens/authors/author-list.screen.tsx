import React,{useState, useEffect} from'react';
import { AuthorList } from '../../components/author-list.component';
import { Author } from '../../services/author';
import { Link } from 'react-router-dom';


export interface AuthorListScreenProps{
   
}


export const AuthorListScreen = (props:AuthorListScreenProps) => {

    const authors=[
                    {name:'Vivek Dutta Mishra',id:'vivek'},                    
                    {name:'Ramdhari Singh Dinkar',id:'dinkar'},
                    {name:'Jeffrey Archer',id:'jeffrey-archer'},                
                ]

    return (

        <div className='AuthorListScreenComponent'>
            <h2>Author List Screen</h2>   
            <ul>
            {
                authors.map((author)=>(
                <li key={author.id}>
                    {/* <a href={`/author/details/${author.id}`}>{author.name}</a> */}
                    <Link to={`/author/details/${author.id}`} >{author.name}</Link>
                </li>))
            }   
            </ul>      
            
        </div>
    );

}
