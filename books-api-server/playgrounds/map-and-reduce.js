use('temp_books')



const addBooks=()=>{
    
    return db.books.insertMany([
    
        { 
            title:'The Accursed God', author:'Vivek Dutta Mishra', reviews:[
            {rating:5, reviewer:'User1', comment:'Good book'},
            {rating:4, reviewer:'User2', comment:'Average'},
            {rating:3, reviewer:'User4', comment:'Fair'},
            {rating:5, reviewer:'User5', comment:'Great'}
        ]},
        {
            title:'The Lost Epic Series', author:'Ramdhari Singh Dinkar', reviews:[
            {rating:4, reviewer:'User6', comment:'Good'},
            {rating:3, reviewer:'User8', comment:'Fair'},
            {rating:2, reviewer:'User9', comment:'Average'},
            {rating:5, reviewer:'User10', comment:'Great'}]
        },
        {
            title:'The Hobbit', author:'J.R.R. Tolkien', reviews:[
            {rating:5, reviewer:'User11', comment:'Good'},
            {rating:3, reviewer:'User12', comment:'Average'},
            {rating:5, reviewer:'User15', comment:'Great'}]
        }
    
    ]);
}

//we want a new collection of books with reviews.
//it should include books, reviews and votes



const getBookSummary=()=>{

    return db.books.aggregate([

        {$unwind: "$reviews"},
        {$group: {
            _id: "$title",
            author: {$first: "$author"},
            votes: {$sum:1},
            _ratingSum: {$sum:"$reviews.rating"}
        }},
        {$project:{
            _id:0,
            title:"$_id",
            author:1,
            votes:1,           
            rating: {$divide: ["$_ratingSum", "$votes"]}

        }}
    ]);

}

const buildBookSummaryCollection=()=>{

    //STEP 1: map to extract rating portion of reviews and key it agains title
    //it is like unwind and group.

    //will run for each books.
    function mapBookRatings(){
        const groupKey= this.title;
        const author=this.author;
        //unwind now
        for(let review of this.reviews){
            emit(groupKey, {rating: review.rating, author}); //return [...{groupKey, rating}]
        }
    }

    //STEP 2: reduce. get a single value for the mapped result.
    function reduceRating(groupKey, groupItems){
        const result={ votes:0}
        
        let sum=0;
        for(let item of groupItems){
            sum+=item.rating;
            result.author=item.author;
            result.votes++;
        }

        result.rating=sum/result.votes;
        return result;
    }

    //STEP 3: finalize. calculate average rating.
    function finalizeRating(key, reducedValue){
        //this is the part of docuemnt
        return{
            _id: key,
            
        }
    }

    //STEP 4: Combin three function to build new collection.
    return db.books.mapReduce(
        mapBookRatings,
        reduceRating,
       
        {
            "out": "book_summary"
        }
    )




}

//db.books.findOne({},{_id:0})

buildBookSummaryCollection();

db.book_summary.find();