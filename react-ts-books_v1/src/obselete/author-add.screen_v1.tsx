import React, { useState, useEffect } from 'react';


export interface AuthorAddScreenProps {


}


export const AuthorAddScreen = (props: AuthorAddScreenProps) => {

    let [name,setName]=useState('');
    let [errorClass,setErrorClass]=useState('');
    
    const handleNameChange=(e:any)=>{
       // console.log(e.target.value);
        setName(e.target.value);
        if(e.target.value.trim().length===0)
            setErrorClass('error-input');
        else
            setErrorClass('');
    }

    const handleAddAuthor = () => {
        console.log('Adding Author',name);
    }


    return (

        <div className='AuthorAddScreenComponent'>
            <h2>Add New Author</h2>

            <hr />
            <div className="row">
                <div className="col-12">
                    <div className="mb-3">
                        {/* <label htmlFor="basic-url" className="form-label">Your vanity URL</label> */}
                        <div className={`input-group `}>
                            <span className="input-group-text" >Name</span>
                            <input type="text" className={`form-control ${errorClass}`}
                                    
                                    onChange={handleNameChange} 
                                    id="name" aria-describedby="basic-addon3 basic-addon4" />
                        </div>
                        {/* <div className="form-text" id="basic-addon4">Example help text goes outside the input group.</div> */}
                    </div>
                    <div className="mb-3">
                        {/* <label htmlFor="basic-url" className="form-label">Your vanity URL</label> */}
                        <div className="input-group">
                            <span className="input-group-text" id="basic-addon3">ID</span>
                            <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4" />
                        </div>
                        {/* <div className="form-text" id="basic-addon4">Example help text goes outside the input group.</div> */}
                    </div>
                    <div className="mb-3">
                        {/* <label htmlFor="basic-url" className="form-label">Your vanity URL</label> */}
                        <div className="input-group">
                            <span className="input-group-text" id="basic-addon3">Photo URL</span>
                            <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4" />
                        </div>
                        {/* <div className="form-text" id="basic-addon4">Example help text goes outside the input group.</div> */}
                    </div>
                    <div className="mb-3">
                        {/* <label htmlFor="basic-url" className="form-label">Your vanity URL</label> */}
                        <div className="input-group">
                            <span className="input-group-text" id="basic-addon3">Tags</span>
                            <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4" />
                        </div>
                        {/* <div className="form-text" id="basic-addon4">Example help text goes outside the input group.</div> */}
                    </div>
                    <div className="input-group mb-3">
                        <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Social</button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Web</a></li>
                            <li><a className="dropdown-item" href="#">Email</a></li>
                            <li><a className="dropdown-item" href="#">Twitter</a></li>
                            <li><a className="dropdown-item" href="#">Instagram</a></li>
                            <li><a className="dropdown-item" href="#">Facebook</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item" href="#">Custom</a></li>

                        </ul>

                        <input type="text" className="form-control" aria-label="Text input with dropdown button" />
                        <button className="btn btn-outline-secondary" type="button">Add</button>
                    </div>

                    <div className="input-group">
                        <span className="input-group-text">Biography</span>
                        <textarea className="form-control" aria-label="With textarea"></textarea>
                    </div>
                    <p />
                    <button 
                        onClick={handleAddAuthor}
                    className='btn btn-primary form-control'>Add Author</button>

                </div>

                <div className="col-6">
                </div>
            </div>

        </div>
    );

}
