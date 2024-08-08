//var BookManager= require('./book-manager');

//const { BookManager } = require("./book-manager");


var app=(function(){

   // var manager=new BookManager();
    var bookList=document.getElementById('book-list');
    var bookEditor=document.getElementById('book-editor');
    var searchBox=document.getElementById('search-box');

    var bookManager=new BookManager();

    

    function toEditor(book){
        $("#book-editor-title").html(book.title? book.title: "New Book");
        $("#book-title").val(book.title);
        $("#book-author").val(book.author);
        $("#book-price").val(book.price);
        $("#book-rating").val(book.rating);
        $("#book-id").val(book._id);
        $("#book-cover").val(book.cover);

        $("#book-cover-image").src(book.cover);

    }

    function fromEditor(){
        var book= new Book(
           
            $("#book-title").val(),
            $("#book-author").val(),
            $("#book-price").val(),
            $("#book-rating").val(),
            $("#book-cover").val()
        )
        book._id=$("#book-id").val();
        return book;
    }

    function refreshBookList(books){
        var items='';
        books.forEach(book=>{
            items+=`<li onclick='app.handleBookSelect(${book._id})' class='book_title'>${book.title}</li>`;
        });
       // $("h1").highlight({color:'red',background:'transparent'});
        bookList.innerHTML=items;
        
    }


    var init=function(){
        var books=bookManager.getBooks();
        refreshBookList(books);
        handleAddBook();
    }

    var handleBookSelect=function(bookId){
        var book=bookManager.getBookById(bookId);
        toEditor(book);
        
    }

    var handleAddBook=function(){
        toEditor({title:"",author:"",price:"",cover:"",rating:"",id:""});
    }

    var handleSave=function(){
        var book=fromEditor();
        if(book._id){
            console.log('updating',book);
            bookManager.updateBook(book);
        } else{
            console.log('adding',book);
            bookManager.addBook(book);
            refreshBookList(bookManager.getBooks());
        }
        
    }

    var handleDelete=function(){
        var bookId=parseInt($("#book-id").val());
        console.log('remove',bookId);
        
        bookManager.removeBook(bookId);
        refreshBookList(bookManager.getBooks());
    }

    var handleSearch=function(){

    }

    var handleSearchTypeSelection=function(){

    }

    return {
        init,
        handleBookSelect,
        handleAddBook,
        handleSave,
        handleDelete,
        handleSearch,
        handleSearchTypeSelection
    };

})();