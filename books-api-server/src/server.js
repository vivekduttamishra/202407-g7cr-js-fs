var http=require('http');
var createApp=require('./app');

const PORT=8000;
const SERVER='localhost';


(async function (){
    let app =await createApp();
    
    var server= http.createServer(app);
    
    server.on('error', error=>console.error(`Error starting server: ${error.message}`));
    server.on('listening', ()=>console.log(`Server started: http://${SERVER}:${PORT}`));

    server.listen(PORT)
})();
