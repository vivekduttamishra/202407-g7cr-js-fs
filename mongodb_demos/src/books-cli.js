var {disconnect} = require('./connection');
var {getAuthorSummary} = require('./books');
var CLI = require('./cli');



var app = new CLI("Books CLI",{close:disconnect});

app.addCommand(getAuthorSummary, "author-info", "Gets infomration about authors","authors");

app.run();
