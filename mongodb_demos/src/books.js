var {connect} = require('./connection');

var url='mongodb://localhost/';


async function getAuthorSummary(){
    var connection= await connect(url);
    var db= connection.db('g7cr_202408');
    var books=db.collection('books');
    var id=0;
    var getUniqueId=()=>{
        id++;
        return id;
    }

    return await books.aggregate([

        {$group:{
           _id:"$authorId",  //group id
           books:{$sum:1},  //add 1 for each row in the group.
        }}

    ]).toArray();
}

module.exports={
    getAuthorSummary
}
