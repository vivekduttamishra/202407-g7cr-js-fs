var {disconnect} = require('./connection');
var {getAuthorSummary,getAuthorDetails,getBookAuthorDetails,query} = require('./books');
var CLI = require('./cli');



var app = new CLI("Books CLI",{close:disconnect});

app.addCommand(getAuthorDetails, "author-info", "Gets infomration about authors","authors");
app.addCommand(getBookAuthorDetails, "book-details");
app.addCommand(query, "q");
app.run();
 