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


    var createSingleInput=()=>`<input type='text' id='q' placeholder='search...'/>`;
    
    function createRangeInputBuilder(label,min, max){
        let _max='';
        if(max){
            _max=`max="${max}"`;
        }

        let _min='';
        if(min!==undefined){
            _min=`min="${min}"`;
        }
        
        function generateUi(){
            return `
            <input type='number' id='min' placeholder='min ${label}' ${_min} ${_max} />
            <input type='number' id='max' placeholder='max ${label}' ${_min} ${_max} />
        `
        }

        return generateUi;
    }


    var searchOptions={
        _id: {
            builder: createSingleInput,
            handler: function(){
                var id= $("#q").int();
                return bookManager.getBookById(id);    
            },
            label:"Id"

        },
        price:{
            builder: createRangeInputBuilder("price",0),
            handler: function(){
                var min= $("#min").val();
                var max= $("#max").val();
                return bookManager.getBooksByPriceRange(min, max);
            },
            label:"Price Range"
        }
       

    }

    function buildSearchUI(selectedType){
        // step #1 add values in the combo box

        // step #2 select the selectedType in combo box

        // step #3 generate the ui for the selected type
    }


    var searchUiBuilder={
        _id: createSingleInput,
        author: createSingleInput,
        price:createRangeInputBuilder("price",0),
        rating: createRangeInputBuilder("rating",1,5),
    }

    var searchHandlers={
        _id: function(){
            var id= $("#q").int();
            var book= bookManager.getBookById(id);
            toEditor(book);
        },
        author:function(){
            var author= $("#q").val();
            return bookManager.getBooksByAuthor(author);
        },
        price:function(){
            var min= $("#min").val();
            var max= $("#max").val();
            return bookManager.getBooksByPriceRange(min, max);
        },
        rating:function(){
            var min=$("#min").val();
            var max=$("#max").val();
            return bookManager.getBooksByRatingRange(min,max);
            
        }
    }


    var handleSearchTypeSelection=function(event){
        searchCriteria=event.target.value;
        displaySearchUi(searchCriteria);
    }

    function displaySearchUi(searchCriteria){
        if(searchUiBuilder[searchCriteria]){
            var ui= searchUiBuilder[searchCriteria];
            var html= ui();
            $("#search-parameters").html(html);
        }
    }



    var handleSearch=function(){
        let searchType = $("#search_criteria").val();
        
        var searchHandler= searchHandlers[searchType];

        if(searchHandler){
            var books=searchHandler();
            if(books)
                refreshBookList(books);
        }
        
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
        //createSearchInputBoxes('_id');
        displaySearchUi('_id');
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