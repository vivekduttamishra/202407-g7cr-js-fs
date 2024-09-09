import React from 'react';

export interface HeaderProps{
    title: string;
    subTitle?: string;
}

export const Header=(props: HeaderProps)=>{
    return (
        <header>
            <h1>{props.title}</h1>
            {props.subTitle && <h2>{props.subTitle}</h2>}
        </header>
    )
}
