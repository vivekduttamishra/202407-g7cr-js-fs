var fs=require('fs');
var path=require('path');


//---> http://books.org/booklist.html

//---> http://books.org ---> search for one of these files index.html, default.html, home.html


var contentMapper={
    ".html":{encoding:"utf8", contentType:"text/html"},
    ".htm": {encoding:"utf8", contentType:"text/html"},
    ".css": {encoding:"utf8", contentType:"text/stylesheet"},
    ".js": {encoding:"utf8", contentType:"application/javascript"},
    ".json": {encoding:"utf8", contentType:"application/json"},
    ".png": {encoding:"", contentType:"image/png"},
    ".jpg": {encoding:"", contentType:"image/jpeg"},
    ".jpeg": {encoding:"", contentType:"image/jpeg"},
    ".gif": {encoding:"", contentType:"image/gif"}
}

var defaultFiles=["index.html","default.html","home.html"];
function setRequestedFile(request,response){
    if(request.url==="/"){
        //find if any default is available.
        console.log('checking for default file');
        
        var defaultFile=defaultFiles.find(file=>fs.existsSync(`wwwroot/${file}`));
        console.log('defaultFile',defaultFile);
        
        if(defaultFile)
            request.url+=defaultFile;
    }
}


function serveStaticFiles(request,response){
 
    console.log('original request.url',request.url);
    setRequestedFile(request,response);
    console.log('updated request.url',request.url);
   
    var url =request.url;
    var index=url.indexOf('?');
    var queryStrings=null;
    if(index>=0){
        queryStrings={}
        
        url.substring(index+1).split('&').forEach( str=>{
            var [key,value]=str.split('=');
            queryStrings[key]=value;
        }); 

        
        url=url.substring(0,index)
        console.log('queryString',queryStrings);
        
    }
    // check if the request path is a file that exists in the wwwroot directory.
   console.log('url',url);
   
    var fullPath=`wwwroot${url}`;

   
    //if yes read the file and add to respone
    
    console.log('searching',fullPath);
    if(fs.existsSync(fullPath)){
        
    
        var extension = path.extname(fullPath);
        var mapper={encoding: 'utf8', contentType:`application/${extension.substring(1)}`};
        if(contentMapper[extension]){
            mapper=contentMapper[extension];  
        }


        response.setHeader('Content-Type', mapper.contentType);
        
        fs
            .createReadStream(fullPath)
            .pipe(response);
        
    
    }else{
        //else send 404.
        response.statusCode=404;
        response.end(`Not Found: ${request.url}`);
        console.log(`Not Found: ${request.url}`);
    }



}

module.exports={
    serveStaticFiles
}