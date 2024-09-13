import React from 'react';
import { reduxAction } from '../utils/action-creator';
import { ApiUserService } from '../services/api-user.service';




export const userReducer = (user: any = null, action: any) => {

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

const userService = new ApiUserService();

export const loginUser=(loginInfo:any)=> ({type: 'LOGIN', payload: userService.login(loginInfo.email,loginInfo.password)});
export const registerUser=(user:any)=> ({type: 'REGISTER', payload: userService.register(user)});
export const logoutUser=()=> ({type: 'LOGOUT', payload: userService.logout()});
export const getLoggedInUser=()=> ({type: 'LOGIN', payload: userService.getLoggedInUser()});





