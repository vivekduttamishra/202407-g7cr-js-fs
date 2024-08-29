var http=require('http');
var {serveStaticFiles} = require('./static-file-server');

function test(request, response){
    if(request.url==="/test"){
        response.setHeader('Content-Type', 'image/png');
        return response.end(`
           <html>
            <title>Hello World</title>
            <body>
                <h1>Hello World!</h1>
            </body>
            </html> 
        `);
    }
}


var server =http.createServer(function(request,response){
   
    console.log(`${request.method} ${request.url}`);
    //test(request,response);
    
    
    serveStaticFiles(request,response);

});

const port=80

server.on('error', error=> console.error(`Unable to start the server: ${error.message}`));

server.listen(port,function(err){
   
    console.log(`started: http://localhost:${port}/`);
   
});