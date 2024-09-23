use('temp101')


const addUsers=()=>{

    db.users.insertMany([
        {email:'vivek@gmail.com',name:'Vivek Dutta Mihsra', hobbies: ['reading','writing','podcasting','youtuber creator']},
        {email:'sanjay@gmail.com',name:'Sanjay Mall', hobbies: ['reading','movies']},
        {email:'shivanshi@gmail.com',name:'Shivanshi Mishra', hobbies: ['law','youtuber creator']},
    ])
}

//addUsers()

db.users.find({},{_id:0})


//update User details. add a new hobby
const addHobby=(email, hobby)=>{

    //add a new hobby to a user

    return db.users.updateOne({email},{
        $push:{hobbies:hobby}
    })

};

//addHobby('shivanshi@gmail.com', 'public speaking');

//addHobby('vivek@gmail.com', 'indian epics');


const replaceRecord=(email, record)=>{
    //replace the entire user record
    record={...record, email};
    return db.users.replaceOne({email},record);
}

// replaceRecord('sanjay@gmail.com', {
//     "name": "Sanjay Mall",
// })



//duplicate records.
//write now we can have duplicates email.



const addUser=(user)=>{
   return  db.users.insertOne(user);
}

//user successfully added.
//addUser({email:'vivek@gmail.com',name:'Vivek Singh', hobbies:['movies','reviews']})


const listUsers=()=>{
    return db.users.find({},{_id:0})
}

listUsers();


//Understanding index.

//we can find current indices for our collection.

//db.users.getIndexes()

//we can create index for faster search
//if we regularly search on name, we can have an index on name

//db.users.createIndex({name:1},{name:'name_index'}) //creates index name_1

db.users.getIndexes();

//we can remove an index.

//db.users.dropIndex('name_index');


//this index will make search on email faster
//db.users.createIndex({email:1})

//but it will not make the records unique.

//addUser({email:'vivek@gmail.com', name:'Vivek Pandey'});
//listUsers();


//we can create a unique index to make sure duplicates are rejected.
//let us drop the email index first and recreate it
//db.users.dropIndex('email_1')

//we will create a unqiu index
//it will be created only if current record conforms to it.
//db.users.createIndex({email:1},{unique:true});

//Let us find out which record violates unqiueness

// db.users.aggregate([
//     {$group: {_id: "$email", count: {$sum:1} }},
//     {$match:{ count:{ $gt:1}}}
    
// ])

//delete the duplicate records.
//db.users.deleteMany({ email:'vivek@gmail.com', name: {$not:/Dutta/} })

//let us again try to create a unqiue index
//db.users.createIndex({email:1},{unique:true});


//addUser({email:'vivek@gmail.com', name:'Vivek Singh'});


//text index.
//some time we want to plain text search in one or more fields
//example search a book by a text matched in: title, autorName, description or tags

//we a text index before we can search normal text

//db.users.find({$text:{ $search:"reading"}});

//create a text index
//db.users.createIndex({ name:'text', hobbies:'text'});

//db.users.find({$text:{ $search:"reading"}});


db.users.find({$text:{$search:'gmail.com'}})



//db.users.find({$text:{$search:'reading law'}});

//db.users.updateOne({email:'vivek@gmail.com'},{ $set:{name:'Vivek Dutta Mishra'}})