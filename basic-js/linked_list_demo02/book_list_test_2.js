var { LinkedList } = require('./list');


var list = new LinkedList();


list.append({ title: 'The Accursed God', author: 'Vivek Dutta Mishra', price: 299 });

list.append(
    { title: 'Manas', author: 'Vivek Dutta Mishra', price: 299 },

    { title: 'To Kill a Mockingbird', author: 'Harper Lee', price: 199 },

    { title: '1984', author: 'George Orwell', price: 229 },

    { author: 'Dan Brown', title: 'Angels and Demons', price: 400 },

    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', price: 249 },

    { title: 'The Da Vinci Code', author: 'Dan Brown', price: 250 },

    { title: 'The Catcher in the Rye', author: 'J.D. Salinger', price: 150 },

);


function printBookList(books, heading){
    console.log(heading);
    if(!books){
        return console.log('No Books')
    }

    for(var i=0; i<books.length(); i++){
        var book=books.get(i);
        console.log(book.title, book.author, book.price);
    }

    console.log("-------------------------------\n");
}


printBookList(list, "All Books");

// function booksByVivek(book){
//     return book.author==='Vivek Dutta Mishra';
// }

//var vivekBooks= list.find(booksByVivek);

var vivekBooks= list.find(b=>b.author==='Vivek Dutta Mishra');

printBookList(vivekBooks, "Books by Vivek Dutta Mishra");

var result2= list.find( book=> book.price>=200 && book.price<=300);

printBookList(result2, "Books between 200 and 300");



