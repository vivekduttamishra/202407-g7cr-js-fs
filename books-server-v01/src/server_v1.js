var http=require('http');

console.log("Welcome to Book's Server");


var server =http.createServer(function(req,res){
    //this function will receive all the requests by the client.
   var url=req.url;
   if(url==='/date')
        res.end( new Date().toLocaleDateString());
    else if(url==='/time')
        res.end(new Date().toLocaleTimeString());
    else{
        res.statusCode=404;
        res.end(`NOT FOUND: ${url}`);
    }

});

const port=80

server.on('error', error=> console.error(`Unable to start the server: ${error.message}`));

server.listen(port,function(err){
   
    console.log(`started: http://localhost:${port}/`);
   
});