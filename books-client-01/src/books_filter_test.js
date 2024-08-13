var {BookManager} = require('./book-manager');
var {LinkedList} = require('./list');
require('./list-extension');
var {take} = require('./utils');

var manager= new BookManager();

var _books= manager.getBooks();

function displayBooks(message,result){
    console.log(message);
    result.forEach(b=>console.log(`${b.price}\t${b.rating}\t${b.author}\t${b.title}`));
    console.log('--------------------------\n');
}

displayBooks('All Books', _books);




var good_books= function(b,rating){
    return b.rating>4.5;
}

var result= _books.filter(good_books);

displayBooks('Books with rating>4.5', _books.filter(good_books));


var matchAuthor = function(authorName){
    var authorName=authorName.toLowerCase();

    function realMatcher(book){
        return book.author.toLowerCase().includes(authorName);
    }

    return realMatcher
}

var booksByVivek = _books.filter( matchAuthor('Vivek') );


var inexpensiveBooks = _books.filter( take(3, b=> b.price<300));

displayBooks('Inexpensive Books', inexpensiveBooks);


displayBooks('First 3 books', _books.filter(take(3)));

