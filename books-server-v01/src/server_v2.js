var http=require('http');
var fs=require('fs');
var path=require('path');


var contentMapper={
    ".html":{encoding:"utf8", contentType:"text/html"},
    ".htm": {encoding:"utf8", contentType:"text/html"},
    ".css": {encoding:"utf8", contentType:"text/stylesheet"},
    ".js": {encoding:"utf8", contentType:"application/javascript"},
    ".json": {encoding:"utf8", contentType:"application/json"},
    ".png": {encoding:"binary", contentType:"image/png"},
    ".jpg": {encoding:"binary", contentType:"image/jpeg"},
    ".gif": {encoding:"binary", contentType:"image/gif"}
}



function serveStaticFiles(request,response){

    // check if the request path is a file that exists in the wwwroot directory.
    var fullPath=`wwwroot${request.url}`;

    //if yes read the file and add to respone
    if(fs.existsSync(fullPath)){
    
        var extension = path.extname(fullPath);
        console.log('url: ' + request.url);
        var mapper={encoding: 'utf8', contentType:`application/${extension.substring(1)}`};
        if(contentMapper[extension]){
            mapper=contentMapper[extension];  
        }
        console.log('mapper',mapper);
        
        response.headers['Content-Type']=mapper.contentType;
        fs
            .createReadStream(fullPath,mapper.encoding)
            .pipe(response);
        
    
    }else{
        //else send 404.
        response.statusCode=404;
        response.end(`Not Found: ${request.url}`);
    }



}

var server =http.createServer(function(request,response){
    serveStaticFiles(request,response);

});

//---> http://books.org/booklist.html

//---> http://books.org ---> search for one of these files index.html, default.html, home.html

const port=80

server.on('error', error=> console.error(`Unable to start the server: ${error.message}`));

server.listen(port,function(err){
   
    console.log(`started: http://localhost:${port}/`);
   
});