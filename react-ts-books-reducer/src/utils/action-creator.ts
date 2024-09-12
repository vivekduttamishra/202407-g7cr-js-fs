

export function action( serviceFunction:(...params:any[])=>any, 
                        dispatch:(action:any)=>void, 
                        setStatus:(text:string,type:any, action:string)=>void, 
                        actionName:string){

    return (...params:any[])=>{
        setStatus("executing","LOADING",actionName);


        //result is either actual result or a promise of result
        let result = serviceFunction(...params);
        console.log('action result',result);
        //this is an async function.
        if(result instanceof Promise){
            console.log('resolving promise');
            result.then(data=>{

                setStatus(`${actionName} Success`,"SUCCESS",actionName);
                dispatch({type:actionName, payload:data});
            
            }).catch(error=>{
                setStatus(error.message,"ERROR",actionName);
            });

        }else{
            console.log('handling sync function');
            setStatus(`${actionName} Success`,"SUCCESS",actionName);
            dispatch({type:actionName, payload:result});
        }    
    }
}