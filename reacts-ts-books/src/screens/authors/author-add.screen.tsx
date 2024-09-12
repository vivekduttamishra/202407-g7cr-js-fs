import React, { useState, useEffect } from 'react';
import { LabeledInput, TextArea } from '../../components/input.component';
import { Author } from '../../services/author';
import { useAuthorContext } from '../../reducers/authors';
import { useStatusContext } from '../../reducers/status.context';
import { Status } from '../../components/status.component';
import { useNavigate } from 'react-router-dom';
import UserLoginScreen from '../user/user-login-screen';


export interface AuthorAddScreenProps {


}


let dummyAuthor:Author={
    name:"",
    id:"",
    biography:"",
    photo:"",
    tags:[],
}

export const _AuthorAddScreen = (props: AuthorAddScreenProps) => {

    const [author,setAuthor]=useState(dummyAuthor);

    const {addAuthor} = useAuthorContext();
    const {status,setStatus}=useStatusContext();
    const navigate = useNavigate();

    useEffect(()=>{
        setStatus("","READY","AUTHOR_ADD");
    },[]);

    useEffect(()=>{
        if(status.type==='SUCCESS' && status.action==='AUTHOR_ADD'){
            navigate('/authors');            
        }


    },[status,navigate]);

    const handleAuthorUpdate=(value:any, id:string)=>{
        if(id==='tags'){
            value=value.split(',')
        }
        setAuthor({
            ...author,
            [id]:value
        });
    }

    const handleSave=async ()=>{
        try{
            
            await addAuthor(author);
            
        }catch(err){
            //will automatically show error
        }
    }

    


    return (

        <div className='AuthorAddScreenComponent'>
            <Status/>
            <h2>Add New Author</h2>

            <hr />
            <div className="row">
                <div className="col-12">
                    <LabeledInput id="name" value={author.name} onUpdate={handleAuthorUpdate}/>
                    <LabeledInput id="id" value={author.id} onUpdate={handleAuthorUpdate} />
                    <LabeledInput id="photo" value={author.photo} onUpdate={handleAuthorUpdate} />
                    <LabeledInput  id="biography" 
                                   value={author.biography} 
                                   onUpdate={handleAuthorUpdate} 
                                   componentBuilder={(props:any)=><TextArea  {...props}/>}
                                   
                                   />
                    <LabeledInput id="tags" value={author.tags} onUpdate={handleAuthorUpdate} />
                    <p />
                    <button 
                        onClick={handleSave}
                    className='btn btn-primary form-control'>Add Author</button>

                </div>

                <div className="col-6">
                </div>
            </div>

        </div>
    );

}

//complete this function
const requireAuthentication=(WrappedComponent:any, options:any)=>{ return WrappedComponent}

export const AuthorAddScreen =requireAuthentication( _AuthorAddScreen, {
    roles:[],
    redirect:'/user/login'
} );