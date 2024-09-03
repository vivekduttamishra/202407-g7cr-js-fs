
import React from 'react';
import ReactDOM from 'react-dom';


const headerStyle = {
    color: 'coral',
    borderBottom: '2px solid gray'
}

function SiteHeader() {

    return (<h2 style={headerStyle}>
                World Wide Books
            </h2>);
}

let books = ['The Accursed God', 'Manas', 'The Count of Monte Cristo']

let bookList = <ul>
    {books.map((book) => <li >{book}</li>)}
</ul>




const siteBody = <div>
    <SiteHeader />
    <h3>Book List</h3>
    {bookList}

</div>




const root = document.getElementById('root');
const app = ReactDOM.createRoot(root);

app.render(siteBody);