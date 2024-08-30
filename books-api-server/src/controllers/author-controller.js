
let authorRepository= require('../repositories/in-memory/in-memory-author-repository');
let AuthorService = require('../services/author-service');

var service = new AuthorService(authorRepository);

async function getAllAuthors(request,response){
    var authors= await service.getAllAuthors();
    response.send(authors);
}

async function getAuthors(){
    return await service.getAllAuthors();  //auto response.send
}


async function getAuthorById(request,response){
   try{
        var author=await service.getAuthorById(request.params.authorId);
        response.send(author);
   }catch(err){
        console.log('err',err);
        
        response.status(404).send(err.info);
   }
}


async function getById({params}){
    //auto response.send
    //auto handle error
    return await service.getAuthorById(params.authorId);  
}


module.exports={
    getAllAuthors,
    getAuthorById,
 };

