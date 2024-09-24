import React, { useState, useEffect } from 'react';
import { withFieldset } from '../../hocs/with-fieldset';
import { LabeledInput } from '../../components/input.component';
import { Status } from '../../components/status.component';
import { useQueryString } from '../../utils/use-qs';
import { useNavigate } from 'react-router-dom';


export interface UserLoginScreenProps {


}


let SimpleUserLoginScreen = (props: UserLoginScreenProps) => {

    const [loginInfo,setLoginInfo]=useState({
        email:"",
        password:""
    });

    const [status,setStatus]= useState('');
    
    const updateLoginInfo=(value:string,id:string)=>{
        setLoginInfo({...loginInfo,[id]:value})
    }
    
    const handleLogin=()=>{
        if(loginInfo.email===''){
            setStatus("Missing Email");
        }else if(loginInfo.password===''){
            setStatus("Missing Password");
        } else if( loginInfo.email==="vivek@gmail.com" && loginInfo.password==="pass"){
            setStatus("Success");
        }
        else{
            setStatus("Invalid Credentials");
        }
    }
    
  


    return (

        <div className='UserLoginScreenComponent'>
            
                <Status/>
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
                        onClick={handleLogin}>
                            Login
                        </button>
                        <p className="status">{status}</p>
                    </div>

                    <div className="col-6">
                    </div>
                </div>
            
           

        </div>
    );

}

SimpleUserLoginScreen = withFieldset(SimpleUserLoginScreen,"User Login");


export default SimpleUserLoginScreen;