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
    _connection=null;
    console.log('disconnected...');
}

async function getConnection(url){
    if(!_connection)
        _connection= await connect(url);
    return _connection;
}

function executor(url, dbName, collectionName){

    return async function(action){
        var connection = await getConnection(url);
        var db= connection.db(dbName);
        var collection= db.collection(collectionName);
        return await action(collection);    
    }
}






module.exports={
    connect,
    disconnect,
    getConnection,
    executor
    
}


