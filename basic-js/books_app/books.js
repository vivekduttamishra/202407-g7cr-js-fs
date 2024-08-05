var { LinkedList } = require('../linked_list_demo02/list')

class Book {
    constructor(title, author, price, rating, coverUrl) {

        this.title = title;
        this.author = author;
        this.price = price;
        this.rating = rating;
        this.coverUrl = coverUrl;
    }

    toString() {
        return `Book ID: ${this.id}, Title: ${this.title}, Author: ${this.author}, Price: ${this.price}, Rating: ${this.rating}`;
    }
}


class BookManager {
    constructor() {
        this._books = new LinkedList();
        this._lastId = 0;
    }

    addBook(...books) {
        for (var book of books) {

            book.id = ++this._lastId;
            this._books.append(book);
        }
    }

    getAllBooks() {
        return this._books;
    }

    removeBook(book) {
        var index = this._books.indexOf(book);
        if (index >= 0) {
            this._books.remove(index);
            return true;
        }
        else {
            return false;
        }
    }
    updateBook(book) {
        var index = this._books.indexOf(book);
        if (index >= 0) {
            this._books.set(index, book);
            return true;
        }
        else {
            return false;
        }
    }

    getBookById(id) {
        for (var i = 0; i < this._books.length(); i++)
            if (this._books.get(i).id === id)
                return this._books.get(i);

        //return undefined.
    }
}


try {
    module.exports.Book = Book;
    module.exports.BookManager = BookManager;
} catch (e) {

}