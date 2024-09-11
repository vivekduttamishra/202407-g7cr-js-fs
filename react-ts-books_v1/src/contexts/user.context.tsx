import React from 'react';
import { User } from '../services/user';
import { InMemoryUserService } from '../services/in-memory-user.service';



const userContext= React.createContext<any>(null);

export const useUserContext=()=> React.useContext(userContext);

//const userService  =new InMemoryUserService();






  //1. call an action creator
   //2. wait for it to finish
   //3. dispath the value returned. 


const message=(text:string, type:string="INFO")=> ({type:"MESSAGE", payload:{text,type}});

interface Store{
    user:User|null;
    message: {text:string, type:string}
}

const userReducer= (store:Store,action:any)=>{

    //console.log('action',action);
    switch (action.type) {
        case 'LOGIN':
            return {
                ...store, //andy data I am not changing
                user:{...action.payload} //update only user
            };
        case 'LOGOUT':
            return {
                ...store,
                user:null
            }
        case 'MESSAGE':
            return{
                ...store,
                message:{...action.payload}
            }
        default:
            return store;
    }
 
}



export const UserProvider=({children}:any)=>{

    const [store,dispatch] = React.useReducer(userReducer,{user:null, message:message("")});

    const userService = new InMemoryUserService();
    //action creator
    const loginUser = async (loginInfo:any)=>{
        try{

            dispatch(message("Validating..."))

            var user=await userService.login(loginInfo.email, loginInfo.password);
            
            dispatch(message(`Welcome ${user.name}`, "SUCCESS"))
            dispatch( {type:"LOGIN", payload:user});
        }
        catch(error:any){

           dispatch(message("Invalid Credentials", "ERROR"));
        }
        
    }
 


    const contextData={
        ...store,  //destructured {user,message}
        //dispatch,  //react doesn't need it anymore
        //userService:userService, //react doesn't need it anymore
        loginUser,
    };

    return <userContext.Provider value={contextData}>
        {children}
    </userContext.Provider>

}

