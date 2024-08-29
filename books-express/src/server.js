var http= require('http');
var {createApp} = require('./app');
var port=8000;

var app=createApp();
var server=http.createServer(app);

server.on('error',error=>{
    console.log(`Error lauching server at port ${port}`)
});

server.on('listening', () =>{
    console.log(`Server listening at http://localhost:${port}`);
}); 

server.listen(port);


