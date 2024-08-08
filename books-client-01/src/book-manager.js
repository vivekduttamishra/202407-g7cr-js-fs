

class Book{
    constructor(title, author, price,rating,cover){
        this.title = title;
        this.author = author;
        this.price = price;
        this.rating = rating;
        this.cover = cover;
        
    }

    toString(){
        return `Title: ${this.title}, Author: ${this.author}, Price: ${this.price}, Rating: ${this.rating}, Cover: ${this.cover}`;
    }
}

class BookManager{
    constructor(){
        this._lastId=0;
        this._books = new LinkedList(
            new Book('The Accursed God','Vivek Dutta Mishra',299,4.6, 'cover.png'),
            new Book('The Night Circus','Vivek Dutta Mishra',399,4.2, 'cover.png'),
            new Book('The Last Supper','Vivek Dutta Mishra',349,4.8, 'cover.png'),
            new Book('The Alchemist','Paulo Coelho',249,4.5, 'cover.png'),
            new Book('The Great Gatsby','F. Scott Fitzgerald',399,4.7, 'cover.png'),
            new Book('The Catcher in the Rye','J.D. Salinger',299,4.3, 'cover.png'),
            new Book('To Kill a Mockingbird','Harper Lee',299,4.5, 'cover.png')
        );

        this._books.forEach(b=> b._id= ++this._lastId);
    }


    addBook(book){
        book._id= ++this._lastId;
        this._books.append(book);
    }

    getBookById(id){
        return this._books.find(b=>b._id==id);
    }

    removeBook(id){
        this._books= this._books.filter(b=>b._id!==id);
    }

    updateBook(book){
        this._books= this._books.map(b=> b._id==book.id?book:b);
    }

    each(action){
        this._books.forEach(action);
    }
}

try{
    module.exports.BookManager=BookManager;
}catch(err){

}
