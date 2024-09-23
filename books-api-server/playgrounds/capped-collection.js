

use('temp_books')

//capped collections.
//we want to cap the size of this collection (max bytes)
//if we add more records, it should remove the earliest record.
//USE CASE: This could useful for caching eg. recent items.


//created a capped collection.

db.createCollection('cached',{
    capped: true,
    size: 1024  // 1KB
});

// db.cached.insertMany([
//     {url:'URL01', requestedAt: new Date()},
//     {url:'URL02', requestedAt: new Date()},
//     {url:'URL03', requestedAt: new Date()},
//     {url:'URL04', requestedAt: new Date()},
// ]);

db.cached.find({},{_id:0});


for(let i=1; i<=17; i++){
    db.cached.insertOne({ url:`URL${i}`, requestedAt: new Date()})
}

db.cached.find({},{_id:0, url:1}).limit(5);

//1KB is full here
//this new record will remove first record
db.cached.insertOne({ url:'URL18',requestedAt: new Date()});


//this new record will remvoe the second record
db.cached.insertOne({ url:'URL19',requestedAt: new Date()});

db.cached.find({},{_id:0, url:1}).limit(5);