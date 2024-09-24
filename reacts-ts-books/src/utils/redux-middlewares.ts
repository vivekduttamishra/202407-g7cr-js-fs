import { setStatus } from "../reducers/status.reducer";


export const promisedPayload=(store:any)=>(next:any)=>(action:any)=>{

    if(action.payload instanceof Promise){
        //send pending message
        store.dispatch( setStatus(action.type, "LOADING"));

        //wait for promise to complete
        action
            .payload
            .then( (actualPayload:any)=>{
                //on success
                store.dispatch(setStatus(action.type, "SUCCESS"));
                action.payload=actualPayload;
                store.dispatch(action);
            })
            .catch((error:any)=>{
                store.dispatch(setStatus(action.type, "ERROR", error));
            })

            return; //do nothing for now

    }else{
        next(action);
    }


}


export const logActions =(...actionNames:string[])=> (store:any)=>(next:any)=>(action:any)=>{

    if(actionNames.includes(action.type)){
        console.log('action',action);
        console.log('store before action',store.getState());
        

    }
    next(action); //pass to next middleware/reducer.
    if(actionNames.includes(action.type)){
        console.log('store afer action',store.getState());
    }

}

export const promisedAction=(store:any)=>(next:any)=>(action:any)=>{

    if(action instanceof Promise){
        console.log('Waiting for promise to complete');
        action.then( realAction =>{
            store.dispatch(realAction);
        }).catch(error=>{
            store.dispatch({type:'ERROR', payload:error});
        })

    }else{
        next(action); //do what you do anyway.
    }


}

export const funcAction = (store:any)=>(next:any)=>(action:any)=>{

    if(typeof action === 'function'){
        action(store.dispatch);
    }else{
        next(action); //do what you do anyway.
    }
}
