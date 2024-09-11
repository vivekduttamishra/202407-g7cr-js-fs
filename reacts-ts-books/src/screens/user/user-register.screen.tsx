import React, { useState, useEffect } from 'react';
import { useUserContext } from '../../contexts/user.context';
import { useStatusContext } from '../../contexts/status.context';
import { Status } from '../../components/status.component';
import { User } from '../../services/user';
import { LabeledInput } from '../../components/input.component';
import { useNavigate } from 'react-router-dom';


export interface UserRegistrationScreenProps {


}


export const UserRegistrationScreen = (props: UserRegistrationScreenProps) => {

    let [user,setUser]=useState({
        name:"",
        email:"",
        password:"",
        photo:"",
        roles:["user"],
    });

    const {status: message} = useStatusContext();
    const navigate = useNavigate();

    useEffect(()=>{

        if(message.type==='SUCCESS')
            navigate('/');

    },[navigate,message.type]);

    function updateUserInfo(value:any, id:string){
        setUser({
            ...user,
            [id]:value
        })
    }


    const { registerUser} = useUserContext();



    return (

        <div className='UserRegistrationScreenComponent'>
            <Status/>
            <h2>User Registration</h2>
            <div className="row">
                <div className="col-6">
                    
                  <LabeledInput 
                        id="name" 
                        value={user.name}
                        onUpdate={updateUserInfo}
                    />
                   <LabeledInput 
                        id="email" 
                        value={user.email}
                        onUpdate={updateUserInfo}
                    />
                    <LabeledInput 
                        id="password"
                        type="password"
                        value={user.password}
                        onUpdate={updateUserInfo}
                    />
                    <LabeledInput 
                        id="photo"                       
                        value={user.photo}
                        onUpdate={updateUserInfo}
                    />
                     
                    <button 
                    className='btn btn-primary form-control'
                    onClick={()=>registerUser(user)}
                    >
                        Register
                    </button>

                </div>

                <div className="col-6">
                </div>
            </div>

        </div>
    );

}
