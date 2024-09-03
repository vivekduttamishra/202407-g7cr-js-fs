
import React from 'react';
import ReactDOM from 'react-dom';


const headerStyle = {
    color: 'coral',
    borderBottom: '2px solid gray'
}

function SiteHeader(args) {
    console.log('args',args);

    const style={
        ...headerStyle,
        color:args.color|| 'red',
    }
    
    return (<h2 style={style}>
                {args.title}
            </h2>);
}

let books = ['The Accursed God', 'Manas', 'The Count of Monte Cristo']

class BookList extends React.Component{

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


const siteBody = <div>
    <SiteHeader title='World of Books' color='blue' />
    <h3>Book List</h3>
    <BookList books={books}/>

</div>




const root = document.getElementById('root');
const app = ReactDOM.createRoot(root);

app.render(siteBody);