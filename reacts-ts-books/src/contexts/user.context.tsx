import React from 'react';
import { User } from '../services/user';
import { InMemoryUserService } from '../services/in-memory-user.service';
import { useStatusContext } from './status.context';
import { action } from '../utils/action-creator';



const userContext= React.createContext<any>(null);

export const useUserContext=()=> React.useContext(userContext);

type ContextUser=User|null;

const userReducer= (user:ContextUser=null,action:any):ContextUser=>{

    //console.log('action',action);
    switch (action.type) {
        case 'LOGIN':
        case 'REGISTER':
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
    
    const loginUser = action((loginInfo:any)=>userService.login(loginInfo.email,loginInfo.password), dispatch, setStatus, "LOGIN");
    const registerUser = action(userService.register, dispatch, setStatus, "REGISTER");
 


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

