import React from 'react';

const headerStyle = {
    color: 'coral',
    borderBottom: '2px solid gray'
}

export function SiteHeader(args) {
    console.log('args',args);

    const style={
        ...headerStyle,
        color:args.color|| 'red',
    }
    
    return (<h2 style={style}>
                {args.title}
            </h2>);
}