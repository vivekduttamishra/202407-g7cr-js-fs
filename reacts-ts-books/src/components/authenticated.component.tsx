import React,{useState, useEffect} from'react';
import { useUserContext } from '../reducers/user.context';


export interface AuthenticatedProps{
    children: any;
    roles?: string[],
}


export const Authenticated = (props:AuthenticatedProps) => {

    const {user} = useUserContext();

    if(!user)
        return null;

    if(props.roles && props.roles.length > 0){
        const requiredRoles = props.roles.map(r=>r.toLowerCase());
        if(!user.roles || user.roles.length===0)
            return null;

        const match = user.roles.find( (r:string)=> requiredRoles.includes(r.toLowerCase()));
        if(!match)
            return null;

    }

    return props.children;

}
