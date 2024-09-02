
let express = require('express');
var toJson = require('./utils/request-json');

var  db = require('./repositories/mongoose/connection'); //


//let configureAuthorRoutes = require('./routes/author-routes');

//console.log('toJson',toJson);


 const authorRoute = require('./routes/author-routes');



async function createApp(){
    await db.connect();

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

    //close the connection on abnormal termination (ctrl+c) of applicaiton
    //we will always have abonormal termination.
    //we will handle special process event.

    process.on('SIGINT',function(){
        console.log('connection closed');
        db.disconnect();
        process.exit(0); //abnormal termination is normal termination here.
    })


    return app;
}

module.exports = createApp;