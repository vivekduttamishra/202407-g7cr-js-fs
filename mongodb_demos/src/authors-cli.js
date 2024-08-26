var CLI = require('./cli');
var {getAllAuthors,getAuthorById} = require('./authors');
var {disconnect} = require('./connection');
    


var app = new CLI("Author's CLI",{close:disconnect});
app.addCommand(getAllAuthors, "authors","Get a list of all authors", "get-authors","authors-list");

app.addCommand(getAuthorById, "author","Get an author by ID", "get-author","author-info");





app.run();