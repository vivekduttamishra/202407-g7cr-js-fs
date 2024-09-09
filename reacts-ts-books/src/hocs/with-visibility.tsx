
export const withVisibility=(Component:any)=>{
    return (props:any)=>{
        let visibility=props.visibility;
        if(visibility===undefined)
            visibility=true;

        console.log('visisbility',visibility);
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