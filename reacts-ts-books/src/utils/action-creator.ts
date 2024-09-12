

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


export const reduxAction = (fn: any, actionName: string) => {
    const _inner = async (...params: any[]) => {
        
        try {
            let result: any = fn(...params);
            if (result instanceof Promise) {
                result = await result;
            }
            return { type: actionName, payload: result };

        } catch (err) {
            return { type: `ERROR_${actionName}`, payload: err };
        }
    }

    return _inner;
}