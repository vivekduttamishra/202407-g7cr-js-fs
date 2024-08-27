use('g7cr_202408');

var books = db.getCollection('books');
var authors=db.getCollection('authors');

function getBookDetails(){
    return authors.aggregate([
        {
            $lookup:{
                from:'books',
                localField:'id',
                foreignField: 'authorId',
                as: 'books'
            }
        },
        {
            $unwind:"$books"
        },
        {
            $project:{
                _id:0,
                id:1,
                name:1,
                book_title: "$books.title",
                price: "$books.price",
            }
        }
    
    ]);
}

var selectedFields={
    _id:0,
    tile:1,
    author:1,
    id:1,
    reviews:1
}

books.aggregate([


    {
        $project:{
            ...selectedFields
        }
    }

])


//getBookDetails()


// books.aggregate([
//     // {
//     //     $match:{id:'the-accursed-god'}
//     // },
//     {
//         $project: {
            
//             _id: 0, 
//             title: 1, 
//             author:1,
//            reviews:1
//         }
//     },
//     {
//        $unwind: "$reviews"
//     }
// ]);