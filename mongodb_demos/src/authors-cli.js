var CLI = require('./cli');
var {getAllAuthors,getAuthorById,addAuthor} = require('./authors');
var {disconnect} = require('./connection');
    


var app = new CLI("Author's CLI",{close:disconnect});
app.addCommand(getAllAuthors, "authors","Get a list of all authors", "get-authors","authors-list");

app.addCommand(getAuthorById, "author","Get an author by ID", "get-author","author-info");


// vivek-dutta-msihra,  "Vivek Dutta Mishra", " "
app.addCommand(async(id,name,biography,photo,age)=>{
    var result= await addAuthor({
        id,
        name,
        age:parseInt(age),
        biography,
        photo 
    });

    console.log(result);

},"author-add","Add a new author");



app.run();