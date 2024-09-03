import React from 'react';


export class BookList extends React.Component{

    //implicit
    // constructor(props){
    //     super(props);
    // }
    
    render=()=>{
        return <ul>
        {this.props.books.map((book) => <li >{book}</li>)}
    </ul>
    }
}