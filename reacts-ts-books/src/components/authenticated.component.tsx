import React, { useState, useEffect, ComponentType } from 'react';
import { User } from '../services/user';
import { useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
//import { useUserContext } from '../reducers/user.context';


export interface AuthenticatedProps {
    children: any;
    roles?: string[],
    redirect?: boolean,
    redirectUrl?: string
}


export const Authenticated = ({ children, roles, redirect = false, redirectUrl = '/user/login' }: AuthenticatedProps) => {

    //const {user} = useUserContext();
    const user: User = useSelector((store: any) => store.user);

    const UnAuthenticated = () => {
        if (redirect)
            return <Navigate to={redirectUrl} />
        else
            return null;
    }

    if (!user)
        return <UnAuthenticated />;

    else if (roles && roles.length > 0) {
        const requiredRoles = roles.map(r => r.toLowerCase());
        if (!user.roles || user.roles.length === 0)
            return <UnAuthenticated />;

        const match = user.roles.find((r: string) => requiredRoles.includes(r.toLowerCase()));
        if (!match)
            return <UnAuthenticated />;
    }

    return children;

}

export function withAuthentication(WrappedComponent: ComponentType<any>, optionsBuilder: any = null) {
    let defaultOptions: any = {
        roles: [],
        redirectUrl: '/user/login',
        redirect: false,
    }
    if (optionsBuilder)
        optionsBuilder(defaultOptions);

    return (props: any) => {
        return (
            <Authenticated  {...defaultOptions} >
                <WrappedComponent {...props} />
            </Authenticated>
        );
    }

}

