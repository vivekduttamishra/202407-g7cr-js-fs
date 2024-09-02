
let express = require('express');
var toJson = require('./utils/request-json');
//let configureAuthorRoutes = require('./routes/author-routes');

console.log('toJson',toJson);


 const authorRoute = require('./routes/author-routes');



async function createApp(){
    let app = express();
   
    app.use(express.json());

    //app.use(toJson);


    app.use((request,response,next)=>{
        console.log(`recevied request: ${request.method} ${request.path}`)
        return next(); //call next middlware.
    });
    
   
    app.use("/api/authors",authorRoute); //add author route to the app.


    
    //a default route exsits at the end of the pipeline.
    //app.return404Error();


    return app;
}

module.exports = createApp;