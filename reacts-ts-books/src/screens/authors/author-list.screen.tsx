import { useEffect } from 'react';
import { Author } from '../../services/author';
import { AuthorCard } from '../../components/author-card.component';
import { getAllAuthors, getAuthorList } from '../../reducers/authors.reducer';
import { connect, useDispatch, useSelector } from 'react-redux';
import { ApiAuthorService } from '../../services/api-author.service';


export interface AuthorListScreenProps {

}


const service =new ApiAuthorService();

export const AuthorListScreen = (props:any) => {
    console.log(`AuthorListScreen: ${props}`);
    
    const authors:Author[]= useSelector((s:any)=>s.authors);

    const dispatch  = useDispatch();


    useEffect(()=>{
        
        // (async ()=>{
        //     const action = await getAuthorList();
        //     dispatch(action);
        // })();

       // dispatch({type:'DO_NOTHING'});

       dispatch<any>(getAuthorList());

    },[]);
   

    
    return (

        <div className='AuthorListScreenComponent'>
            <h2>Author List Screen</h2>
            <div className='row'>
                {
                    authors.map((author:Author) => (
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

//export default connect(reduxStoreToProps,{getAllAuthors})(AuthorListScreen);

export default AuthorListScreen;