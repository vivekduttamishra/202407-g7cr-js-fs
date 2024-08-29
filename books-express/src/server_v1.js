var express = require('express');
var http= require('http');
var port=8000;


var app=express();

app.use(express.static('wwwroot',{
    index:"default.html",
}));

app.get('/', function(request,response){
    console.log('request',request.path);
    
    response.send('Welcome to Books Express');
});




app.get('/authors', function (request,response){
    response.send('Sending a list of authors');
});

app.post('/authors', function (request,response){
    response.send('Author saved successfully');
});


var server=http.createServer(app);


server.on('error',error=>{
    console.log(`Error lauching server at port ${port}`)
});


server.on('listening', () =>{
    console.log(`Server listening at http://localhost:${port}`);
}); 

server.listen(port);


