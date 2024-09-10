import React, { useState, useEffect } from 'react';
import { withFieldset } from '../../hocs/with-fieldset';
import { LabeledInput } from '../../components/input.component';
import { useUserContext } from '../../contexts/user.context';
import { useNavigate } from 'react-router-dom';


export interface UserLoginScreenProps {


}


let UserLoginScreen = (props: UserLoginScreenProps) => {

    const [loginInfo,setLoginInfo]=useState({
        email:"vivek@conceptarchitect.in",
        password:"p@ss"
    });
    const [errorMessage, setErrorMessage]=useState("");
    const {userService,dispatch} = useUserContext();
    const navigate = useNavigate();

    const updateLoginInfo=(value:string,id:string)=>{
        setLoginInfo({...loginInfo,[id]:value})
    }

    const handleLogin=async()=>{
        setErrorMessage("");
        console.log('loggin in ', loginInfo);
        const user = await userService.login(loginInfo.email,loginInfo.password);
        console.log('user', user);
        if(user){
            console.log('logged in user', user);
            dispatch({type:"LOGIN",payload:user});
            navigate('/');
            
        }else{
            setErrorMessage("Invalid email or password");
        }
    
    
    }


    return (

        <div className='UserLoginScreenComponent'>
            
                <div className="row">
                    <div className="col-6">
                        
                        <LabeledInput id="email" 
                                      value={loginInfo.email} 
                                      type="email" 
                                      onUpdate={updateLoginInfo}
                                      />
                        <LabeledInput id="password" 
                                      value={loginInfo.password} 
                                      type="password" 
                                      onUpdate={updateLoginInfo}
                                      />
                        <button 
                        className='btn btn-primary form-control'
                        onClick={handleLogin}
                        >Login</button>
                        <p className='text-danger'>{errorMessage}</p>
                    </div>

                    <div className="col-6">
                    </div>
                </div>
            
           

        </div>
    );

}

UserLoginScreen = withFieldset(UserLoginScreen,"User Login");


export default UserLoginScreen;