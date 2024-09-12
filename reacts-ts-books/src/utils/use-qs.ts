import { useLocation } from "react-router-dom";


export const useQueryString=()=>{
    const location=useLocation();
    let qs= location.search
    if(qs.startsWith("?"))
        qs=qs.substring(1);

    var result:any={};
    for(let pair of qs.split('&')){
        const[k,v]=pair.split('=');
        result[k.toLowerCase()]=v;
        
    }

        
    return result;
}