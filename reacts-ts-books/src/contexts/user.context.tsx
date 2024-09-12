import React from 'react';
import { User } from '../services/user';
import { InMemoryUserService } from '../services/in-memory-user.service';
import { useStatusContext } from './status.context';
import { action } from '../utils/action-creator';
import { ApiUserService } from '../services/api-user.service';



const userContext = React.createContext<any>(null);

export const useUserContext = () => React.useContext(userContext);

type ContextUser = User | null;

const userReducer = (user: ContextUser = null, action: any): ContextUser => {

    //console.log('action',action);
    switch (action.type) {
        case 'LOGIN':
        case 'REGISTER':
            return { ...action.payload }
        case 'LOGOUT':
            return null;
        default:
            return user;
    }

}



export const UserProvider = ({ children }: any) => {

    //const userService = new InMemoryUserService();
    const userService = new ApiUserService();

    const [user, dispatch] = React.useReducer(userReducer, userService.getLoggedInUser());
    const { setStatus, status } = useStatusContext();
    //action creator

    const actions = {

        loginUser: action((loginInfo: any) => userService.login(loginInfo.email, loginInfo.password), dispatch, setStatus, "LOGIN"),
        registerUser: action(userService.register, dispatch, setStatus, "REGISTER"),
        logoutUser: action(userService.logout, dispatch, setStatus, "LOGOUT"),
        getLoggedInUser: action(() => userService.getLoggedInUser, dispatch, setStatus, "LOGIN")

    }


    const contextData = {
        user,
        message: status,
        ...actions,
        dispatch
    };

    return <userContext.Provider value={contextData}>
        {children}
    </userContext.Provider>

}

