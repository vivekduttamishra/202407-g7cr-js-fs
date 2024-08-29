var express = require('express');
var {getAllAuthors} = require('./db/authors');


function createApp() {

    console.log('configuring the app');
    var app = express();

    app.use(express.static('wwwroot', {
        index: "default.html",
    }));

    app.get('/', function (request, response) {
        console.log('request', request.path);

        response.send('Welcome to Books Express');
    });

    app.get('/authors', async function (request, response) {
        var authors = await getAllAuthors();
        response.send(authors);
    });

    app.post('/authors', function (request, response) {
        
    
    });

    return app;    
}


module.exports={createApp};
