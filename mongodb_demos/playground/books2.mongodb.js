// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

const { ReturnDocument } = require("mongodb");

// The current database to use.
use('g7cr_202408');

db.getCollection('books').aggregate([
        
   {    
    $unwind: "$reviews"
   },
   {
    $project: {
       title: 1,
       id: 1,
       _id: 0,
       author: 1,
       price: 1,
       votes: { $size: "$reviews" },
       rating: { $avg: "$reviews.rating" }
    }
   }
    
]);







