import React, { useState, useEffect } from 'react';
import { withFieldset } from '../../hocs/with-fieldset';
import { LabeledInput } from '../../components/input.component';
import { useUserContext } from '../../contexts/user.context';
import { useNavigate } from 'react-router-dom';
import { useMessageContext } from '../../contexts/message.context';
import { Message } from '../../components/message.component';


export interface UserLoginScreenProps {


}


let UserLoginScreen = (props: UserLoginScreenProps) => {

    const [loginInfo,setLoginInfo]=useState({
        email:"vivek@conceptarchitect.in",
        password:"p@ss"
    });
    const updateLoginInfo=(value:string,id:string)=>{
        setLoginInfo({...loginInfo,[id]:value})
    }


    // const [errorMessage, setErrorMessage]=useState("");
    // const [statusMessage,setStatusMessage]=useState("");
    
    
    const{loginUser,user} = useUserContext();

    console.log('In Login Component')
    console.log('user',user);
    console.log('message',message);

    
    const handleLogin=()=>{
        loginUser(loginInfo);   
    }
    
    
    //const {userService,dispatch} = useUserContext();
    // const handleLogin=async()=>{
    //     setErrorMessage("");
    //     console.log('loggin in ', loginInfo);
    //     try{
    //         setStatusMessage("validating...");
    //         const user = await userService.login(loginInfo.email,loginInfo.password);
    //         dispatch({type:"LOGIN",payload:user});
    //         setStatusMessage(`welcome ${user.name}`);
            
    //     }catch(err:any){
    //         setErrorMessage(err.message);
    //         setStatusMessage("Login Failed");
    //         console.error(err);
    //     }      
    
    
    // }


    return (

        <div className='UserLoginScreenComponent'>
            
                <Message/>
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
                        
                    </div>

                    <div className="col-6">
                    </div>
                </div>
            
           

        </div>
    );

}

UserLoginScreen = withFieldset(UserLoginScreen,"User Login");


export default UserLoginScreen;