var {MongoClient} = require('mongodb');


var url ='mongodb://localhost:27019';
var _connection=null;

async function connect(url){
    _connection= await MongoClient.connect(url);
    return _connection;
}

async function disconnect(connection){
    if(!connection)
        connection=_connection;
    await connection.close();
    console.log('disconnected...');
}


module.exports={
    connect,
    disconnect,
    
}


