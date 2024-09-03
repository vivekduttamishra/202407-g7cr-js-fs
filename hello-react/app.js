console.log('Hello World!');

var placeHolder = document.getElementById('placeholder');

//placeHolder.innerHTML = '<h2>Hello From App</h2>';


// var h2=document.createElement('h2');
// h2.innerHTML="Hello from App";

var books = [
    'The Accursed God',
    'Manas',
    'The Count of Monte Cristo'
]

let siteTitle = React.createElement('div', {
    style: {
        borderBottom: '1px solid black',
        paddingBottom: 10
    }
    }, //attribute
    React.createElement('h2', {}, "Books"),

);

var body = React.createElement('div',
    {
        id: 'container',
        style: {
            border: '1px solid black',
            height: 190,
            color: 'blue'
        }
    }, //attribute
    siteTitle,
    React.createElement('h2', {}, "Book List"),
    React.createElement('ul', {
        style: {
            listStyleType: 'none', //list-style-stype:none
            paddingLeft: 10
        }
    },
        books.map(book => React.createElement('li', {
            onClick: function(){
                alert(book);
            }
        }, book))
    )
);

//placeHolder.innerHTML=JSON.stringify(h2);

var root = ReactDOM.createRoot(placeholder);

root.render(body);