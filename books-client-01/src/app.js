//var BookManager= require('./book-manager');


var app=(function(){

   // var manager=new BookManager();
    var bookList=document.getElementById('book-list');
    var bookEditor=document.getElementById('book-editor');
    var searchBox=document.getElementById('search-box');

    var bookManager=new BookManager();


    var init=function(){
        var items='';
        bookManager.each(book=>{
            items+=`<li class='book_title'>${book.title}</li>`;
        });

        bookList.innerHTML=items;
    }

    var handleBookSelect=function(){

    }

    var handleAddBook=function(){

    }

    var handleSave=function(){

    }

    var handleDelete=function(){
    
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