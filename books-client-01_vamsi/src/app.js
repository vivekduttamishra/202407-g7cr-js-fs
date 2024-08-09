//var BookManager= require('./book-manager');

//const { BookManager } = require("./book-manager");


var app=(function(){

   // var manager=new BookManager();
    var bookList=document.getElementById('book-list');
    var bookEditor=document.getElementById('book-editor');
    var searchBox=document.getElementById('search-box');

    var searchCriteriaDropDown= document.getElementById("search-criteria");
    var searchInput=document.getElementById("search-input"); 
    var searchButton=document.getElementById("search-button");

    var minMaxDiv=document.getElementById("min-max-div");

    var searchCriteria="";

    var bookManager=new BookManager();

    //name defined by Shiva.
    function createSearchInputBoxes(bar){
        switch(bar){
            case 'author':
                return hideMinMaxDiv('author');
            case 'price':
                return hideSearchBox('price');

            case 'rating':
                return hideSearchBox('rating');

            case '_id':
                return hideMinMaxDiv('id');

        }
    }

    createSearchInputBoxes('_id');

    function hideMinMaxDiv(term){
        minMaxDiv.style.display="none";
        searchInput.style.display="inline";
        searchInput.setAttribute('placeholder',`Search ${term}`);
    }
    function hideSearchBox(term){
        $("#min").attr('placeholder','Min '+term);
        $("#max").attr('placeholder','Max '+term);
        if(term=='rating'){
            $("#min")
                .attr('min',1)
                .attr('max',5);

            $("#max")
                .attr('min',1)
                .attr('max',5);
        }
        searchInput.style.display="none";
        minMaxDiv.style.display="inline";
    }


    var handleSearchTypeSelection=function(event){
        //searchCriteria=searchCriteriaDropDown.value;
        //console.log('searchCriteria',searchCriteria);
        searchCriteria=event.target.value;
        console.log('searchCriteria',searchCriteria);
        createSearchInputBoxes(searchCriteria);
    }
    

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
        var bookId=$("#book-id").int();
        console.log('remove',bookId);
        
        bookManager.removeBook(bookId);
        refreshBookList(bookManager.getBooks());
    }



    var handleSearch=function(){
        let searchType = $("#search_criteria").val();
        let searchValue = $("#search-input").val();
        console.log("app.js", searchValue)
        let min = $("#search_min").val();
        let max = $("#search_max").val();

        let filteredBooks = bookManager.search(searchType,searchValue , min, max);
        console.log("filteredBooks", filteredBooks);

        refreshBookList(bookManager.getBooks());
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