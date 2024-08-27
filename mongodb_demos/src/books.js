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

           author:{$first:"$author"},
           
           books:{$sum:1},  //add 1 for each row in the group.
        }}

    ]).toArray();
}


async function getBookAuthorDetails(){
    var connection= await connect(url);
    var db= connection.db('g7cr_202408');
    var books=db.collection('books');
    var id=0;
    var selectedBookFields={
        _id:0,
        id:1,
        title:1,
        cover:1,
        price:1
    }

    return await books.aggregate([
        {
            $lookup:{
                from:'authors',
                localField:'authorId', //books.authorId
                foreignField:'id',     //authors.id

                as:'authorInfo'   //as authorInfo
            }

        },
        {
            $project:{
               ...selectedBookFields,
               author:{$first:"$authorInfo.name"},
               authorPhoto:{$first:"$authorInfo.photo"}
            }
        },
        // {
        //     $project:{
        //         ...selectedBookFields,
        //         authorName:"$author.name",
        //         authorPhoto:"$author.photo"
        //     }
        // }

       

    ]).toArray();
}
async function getAuthorDetails(){
    var connection= await connect(url);
    var db= connection.db('g7cr_202408');
    var authors=db.collection('authors');
    var id=0;
    

    return await authors.aggregate([
        {
            $lookup:{
                from:'books',
                localField:'id', //books.authorId  PK
                foreignField:'authorId',     //books.authorId  FK

                as:'booklist'   //as booklist
            }
        },
        {
            $project:{
                id:1,
                _id:0,
                name:1,
                booklist:1,
            }
        }

       

    ]).toArray();
}


async function query(){
    var connection = await connect(url);
    var db= connection.db('g7cr_202408');
    var books=db.collection('books');

    return books.aggregate([
        {
            $match:{id:'the-accursed-god'}
        }
    ]).toArray();
}

module.exports={
    getAuthorSummary,
    getBookAuthorDetails,
    getAuthorDetails,
    query
}
