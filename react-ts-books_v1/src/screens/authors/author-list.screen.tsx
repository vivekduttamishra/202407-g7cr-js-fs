import React, { useState, useEffect } from 'react';
import { AuthorList } from '../../components/author-list.component';
import { Author } from '../../services/author';
import { Link } from 'react-router-dom';
import { AuthorCard } from '../../components/author-card.component';
import { useAuthorContext } from '../../contexts/author.context';
import { InMemoryAuthorService } from '../../services/in-memory-author.service';
import { LoadingAnimation } from '../../components/loading-animation.component';


export interface AuthorListScreenProps {

}




export const AuthorListScreen = () => {

    //const authorService = new InMemoryAuthorService();

    const authorService = useAuthorContext(); //I don't know InMemoryAuthorService or ApiAuthorService

    const [authors, setAuthors] = useState<Author[]>([]);

    useEffect(() => {

        authorService
            .getAllAuthors()
            .then(setAuthors);
    }, []);

    console.log('total authors:', authors.length);

    if (authors.length === 0) {
        return <LoadingAnimation/>;
    }

    return (

        <div className='AuthorListScreenComponent'>
            <h2>Author List Screen</h2>
            <div className='row'>
                {



                    authors.map((author) => (
                        <div key={author.id} className='col col-md-4'>
                            <AuthorCard author={author} />
                        </div>
                    ))
                }
            </div>

        </div>
    );

}
