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

function findBooksByAuthor(list,author){
    var result= new LinkedList();

    for(var i=0;i<list.length();i++){
        var book=list.get(i);
        if(book.author===author)
            result.append(book);
    }

    return result;
}

function findBooksInPriceRange(list,min,max){
    var result= new LinkedList();
    for(var i=0;i<list.length(); i++){
        var book=list.get(i);
        if(book.price>=min && book.price<=max)
            result.append(book);
    }

    return result;
}



printBookList(list, "All Books");


printBookList(findBooksByAuthor(list, 'Vivek Dutta Mishra'), "Books by Vivek Dutta Mishra");

printBookList(findBooksInPriceRange(list, 200,300), 'Books in Price range 200-300');

printBookList(findBooksInPriceRange(list, 100,150), 'Books in Price range 100-150');
