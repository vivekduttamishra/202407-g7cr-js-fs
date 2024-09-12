import React from 'react';
import { useStatusContext } from './status.context';
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

export const userActions = {

    loginUser: reduxAction((loginInfo: any) => userService.login(loginInfo.email, loginInfo.password),  "LOGIN"),
    registerUser: reduxAction(userService.register,"REGISTER"),
    logoutUser: reduxAction(userService.logout,"LOGOUT"),
    getLoggedInUser: reduxAction(() => userService.getLoggedInUser, "LOGIN")
}



