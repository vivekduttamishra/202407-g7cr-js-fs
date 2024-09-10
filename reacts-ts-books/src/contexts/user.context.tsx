import React from 'react';
import { User } from '../services/user';
import { InMemoryUserService } from '../services/in-memory-user.service';



const userContext= React.createContext<any>(null);

export const useUserContext=()=> React.useContext(userContext);

const userService  =new InMemoryUserService();

const userReducer= (user:User,action:any)=>{

    console.log('action',action);
    switch (action.type) {
        case 'LOGIN':
            return {...action.payload};
        case 'LOGOUT':
            return null;
        default:
            return user;
    }
 
}

//action creator
const loginUser = async (loginInfo:any)=>{
    var user=await userService.login(loginInfo.email, loginInfo.password);
    if(user)
        return {type:"LOGIN", payload:user};
    else
        return {type:"ERROR", payload:"Invalid Credentials"};
}


  //1. call an action creator
   //2. wait for it to finish
   //3. dispath the value returned. 




export const UserProvider=({children}:any)=>{

    const [user,dispatch] = React.useReducer(userReducer,null);

    
 


    const contextData={user,dispatch,userService, loginUser };

    return <userContext.Provider value={contextData}>
        {children}
    </userContext.Provider>

}

