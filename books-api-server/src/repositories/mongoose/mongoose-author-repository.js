const Author = require('./author.schema');

class AuthorRepository{
    constructor(){

    }

    getAllAuthors=async()=>{

       return  await Author.find({});

    }
    getAuthorById=async(id)=>{

        return await Author.findOne({id});

    }

    addAuthor=async(author)=>{

        var newAuthor = new Author(author);
        
        var dbAuthor= await newAuthor.save();
        return dbAuthor;

    }


    removeAuthor=async(id)=>{

    }
    updateAuthors=async(id,author)=>{

    }
    searchAuthors=async(q)=>{

    }

    
}

module.exports = AuthorRepository;