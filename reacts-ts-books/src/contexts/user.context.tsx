import React from 'react';
import { User } from '../services/user';
import { InMemoryUserService } from '../services/in-memory-user.service';
import { useMessageContext } from './message.context';



const userContext= React.createContext<any>(null);

export const useUserContext=()=> React.useContext(userContext);

type ContextUser=User|null;

const userReducer= (user:ContextUser=null,action:any):ContextUser=>{

    //console.log('action',action);
    switch (action.type) {
        case 'LOGIN':
            return {...action.payload}
        case 'LOGOUT':
            return null;
        default:
            return user;
    }
 
}



export const UserProvider=({children}:any)=>{

    const [user,dispatch] = React.useReducer(userReducer, null);
    const {setMessage,message} = useMessageContext();

    const userService = new InMemoryUserService();
    //action creator
    const loginUser = async (loginInfo:any)=>{
        try{

            setMessage("Validating...","INFO")
            var user=await userService.login(loginInfo.email, loginInfo.password);
            
            setMessage(`Welcome ${user.name}`, "SUCCESS");
            dispatch( {type:"LOGIN", payload:user});
        }
        catch(error:any){

           setMessage("Invalid Credentials", "ERROR");
        }
        
    }

    const registerUser = async (user:User)=>{
        try{

            setMessage("Validating...","INFO")
            const result=await userService.register(user);
            
            setMessage(`Welcome ${user.name}`, "SUCCESS");
            dispatch( {type:"LOGIN", payload:result});
        }
        catch(error:any){

           setMessage(error.message, "ERROR");
        }
        
    }
 


    const contextData={
        user,
        message,
        loginUser,
        registerUser
    };

    return <userContext.Provider value={contextData}>
        {children}
    </userContext.Provider>

}

