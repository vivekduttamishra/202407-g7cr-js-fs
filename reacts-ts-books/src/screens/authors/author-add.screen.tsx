import React, { useState, useEffect } from 'react';
import { LabeledInput, TextArea } from '../../components/input.component';
import { Author } from '../../services/author';


export interface AuthorAddScreenProps {


}


let dummyAuthor:Author={
    name:"",
    id:"",
    biography:"",
    photo:"",
    tags:[],
}

export const AuthorAddScreen = (props: AuthorAddScreenProps) => {

    const [author,setAuthor]=useState(dummyAuthor);

    const handleAuthorUpdate=(value:any, id:string)=>{
        if(id==='tags'){
            value=value.split(',')
        }
        setAuthor({
            ...author,
            [id]:value
        });
    }

    const handleSave=()=>{
        console.log('saving',author);
    }


    return (

        <div className='AuthorAddScreenComponent'>
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
