var express = require('express');
var port=7000;


var app=express();
app.listen(port,error=>{
    if(error) 
        console.log('Error starting server',error);
    else 
        console.log(`server startted: http://localhost:${port}`);
});


