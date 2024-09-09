import { JsxElement } from "typescript";

export const withFieldset=(Component:any, title:string)=>{

    return (props:any)=>{
        return (
            <fieldset>
                <legend>{props.title || title}</legend>
                <Component {...props}/>
            </fieldset>
        )
    }
}