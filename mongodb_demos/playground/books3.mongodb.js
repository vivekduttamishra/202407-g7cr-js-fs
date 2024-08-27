

use('g7cr_202408');


let books=db.getCollection('books');

function getBooksAbovePrice(price){
    
   return  books.aggregate([
        {$match:{
            price:{$gt:price},
        }},
        
        {$project:{
            _id:0,
            id:1,
            title:1,
            author:1,
           
            
        }},
    
    
    ]);

}

//getBooksAbovePrice(400);


function getBooksWithMinReviewCount(votes){

    var selectedFields={
        _id:0,
        id:1,
        title:1,
        author:1
    }
    
    return books.aggregate([
    
        {
            $project:{
               ...selectedFields,
                reviews: {
                    $ifNull:[
                        "$reviews",
                        []
                    ]
                },
            }
        },
        {
            
            $project:{
               ...selectedFields,
              
                review_count: {$size:"$reviews"},
                rating:{
                    $ifNull:[
                        {$avg:"$reviews.rating"},
                        "not-reviewed"
                    ]
                } 

            }
        },
    
        {
            $match: { review_count: {$gte:votes}}
        },

        {
            $sort:{ author:-1 }
        }
    
    ]);

}


//getBooksWithMinReviewCount(0);







function updateAuthorId(bookId,authorId){

   return books.findOneAndUpdate({
      id:bookId
    },{
        $set:{
            authorId:authorId
        }
    });
}


//updateAuthorId('kane-and-abel','jeffrey-archer');



// books.insertOne({
//     title:"Atomic Habbits",
//     id:"atomic-habbits",
//     author:"James Clear",
//     authorId:"james-clear",
//     cover:"atomic-habbits.png"    
// });


//books.find();