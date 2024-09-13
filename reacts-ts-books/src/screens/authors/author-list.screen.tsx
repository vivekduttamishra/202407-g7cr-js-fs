import { useEffect } from 'react';
import { Author } from '../../services/author';
import { AuthorCard } from '../../components/author-card.component';
import { getAllAuthors } from '../../reducers/authors.reducer';
import { connect } from 'react-redux';


export interface AuthorListScreenProps {

}


//const service =new ApiAuthorService();

export const AuthorListScreen = (props:any) => {
    console.log(`AuthorListScreen: ${props}`);
      
    useEffect(()=>{
        props.getAllAuthors();
    },[]);
   

    
    return (

        <div className='AuthorListScreenComponent'>
            <h2>Author List Screen</h2>
            <div className='row'>
                {
                    props.authors.map((author:Author) => (
                        <div key={author.id} className='col col-md-4'>
                            <AuthorCard  author={author} />
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

export default connect(reduxStoreToProps,{getAllAuthors})(AuthorListScreen);

//export default AuthorListScreen;