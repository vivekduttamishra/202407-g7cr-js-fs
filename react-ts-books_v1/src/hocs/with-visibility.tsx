import { ComponentType } from "react";






export const withVisibility=(Component:any, defaultVisibility=false)=>{
    return (props:any)=>{
        let visibility=props.visibility;
        if(visibility===undefined)
            visibility=defaultVisibility;

        //('visisbility',visibility);
        if(!visibility){
           if(props.otherwise){
               return props.otherwise
           }else{
                return null;
           }
        }
        else
            return <Component {...props}/>

    }
}