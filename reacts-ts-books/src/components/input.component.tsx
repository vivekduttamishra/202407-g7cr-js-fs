import React, { useState, useEffect } from 'react';


export interface LabeledInputProps {
    value: any,
    id: string,
    onUpdate: (value: any, id: string) => void

    label?: string,
    type?: string,
    placeholder?: string,
    errorClass?:string,

    componentBuilder?: any
}


export const LabeledInput = ({ value, id, onUpdate, label = id,componentBuilder,  placeholder = label, type = "text" }: LabeledInputProps) => {

    const handleUpdate=(e:any)=>{
        onUpdate(e.target.value, id);
    }

    let _props={
        value, 
        id, 
        onChange:handleUpdate,
        placeholder,
        type,
        className:`form-control`,
        //"aria-describedby":"basic-addon3 basic-addon4"
    }
   
   

    return (

        <div className="mb-3">
            {/* <label htmlFor="basic-url" className="form-label">Your vanity URL</label> */}
            <div className={`input-group `}>
                <span className="input-group-text" >{label}</span>
                
                {componentBuilder!==undefined?componentBuilder(_props):<input {..._props} />}
            </div>
            {/* <div className="form-text" id="basic-addon4">Example help text goes outside the input group.</div> */}
        </div>
    );

}


export const TextArea =(props:any)=>(
    <textarea {...props}>
    </textarea>
);
