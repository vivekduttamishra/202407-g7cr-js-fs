import { setStatus } from "../reducers/status.reducer"


export const log=(...actions:string[])=>(store:any)=>(next:any)=>(action:any)=>{
    if(actions.length ===0 || actions.includes(action.type)){
        console.log('action',action);
        
    }
    next(action);
}

export const asyncPayload = (store:any) => (next:any) => (action:any) =>{

    //console.log('action',action);
    if(action.payload instanceof Promise){
        store.dispatch(setStatus(action.type, "EXECUTING"));
        action
            .payload
            .then((result:any)=>{
                store.dispatch(setStatus(action.type, "SUCCESS"));
                store.dispatch({type: action.type, payload:result});
            })
            .catch((error:any)=>{
                store.dispatch(setStatus(action.type, "ERROR", error));
            });
    } else{
        next(action);
    }


}