const mongoose = require('mongoose');



const ReviewSchema = new mongoose.Schema({

    reviewerName: String,
    rating:Number,
    title:String,
    reviewText: String, 

});

const Bookschema = new mongoose.Schema({

    id:String,
    title:String,
    authorId:String,
    description:String,
    price:Number,
    reviews:[ReviewSchema]

})

const Book = mongoose.model('Book', Bookschema,'books');