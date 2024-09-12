import React from 'react';
import { User } from '../services/user';
import { InMemoryUserService } from '../services/in-memory-user.service';
import { useStatusContext } from '../contexts//status.context';



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
    const {setStatus,status} = useStatusContext();

    const userService = new InMemoryUserService();
    //action creator
    const loginUser = async (loginInfo:any)=>{
        try{

            setStatus("Validating...","LOADING","LOGIN")
            var user=await userService.login(loginInfo.email, loginInfo.password);
            
            setStatus(`Welcome ${user.name}`, "SUCCESS","LOGIN");
            dispatch( {type:"LOGIN", payload:user});
        }
        catch(error:any){

           setStatus("Invalid Credentials", "ERROR","LOGIN");
        }
        
    }

    const registerUser = async (user:User)=>{
        try{
            // console.log('registeration', user);
            setStatus("Validating...","LOADING","REGISTER")
            const result=await userService.register(user);
            
            setStatus(`Welcome ${user.name}`, "SUCCESS","REGISTER");
            dispatch( {type:"LOGIN", payload:result});
           // console.log('registeration done',result);
        }
        catch(error:any){
            
           //console.log('registeration failed',error.message);
           setStatus(error.message, "ERROR","REGISTER");
        }
        
    }
 


    const contextData={
        user,
        message: status,
        loginUser,
        registerUser
    };

    return <userContext.Provider value={contextData}>
        {children}
    </userContext.Provider>

}

