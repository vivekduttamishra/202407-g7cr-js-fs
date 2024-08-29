var http=require('http');
var {serveStaticFiles} = require('./static-file-server');

var server =http.createServer(function(request,response){
   
    console.log(`${request.method} ${request.url}`);
    serveStaticFiles(request,response);

});

const port=80

server.on('error', error=> console.error(`Unable to start the server: ${error.message}`));

server.listen(port,function(err){
   
    console.log(`started: http://localhost:${port}/`);
   
});