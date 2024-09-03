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
    authorId:{
        type:String
        
    },
    description:String,
    price:Number,
    reviews:[ReviewSchema]

})

Bookschema.virtual('authorDetails', {
    ref: 'Author',        // The model to use
    localField: 'authorId',  // The field in Book
    foreignField: 'id',  // The field in Author
    justOne: true        // Use `justOne` if you want to get a single document instead of an array
});

const Book = mongoose.model('Book', Bookschema,'books');

module.exports={Book};