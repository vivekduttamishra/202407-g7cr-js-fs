const {injector} = require('./utils/injector');

// Import all your modules here.
const MongooseAuthorRepository = require('./repositories/mongoose/mongoose-author-repository');
const AuthorService= require('./services/author-service');
const Author = require('./repositories/mongoose/author.schema');
const db= require('./repositories/mongoose/connection');
const AuthorController = require('./controllers/author-controller');


module.exports = ()=>{

    //add all your dependencies here.

    injector
        .register("authorRepository", MongooseAuthorRepository)
        .register("authorService", AuthorService)
        .register("author", Author)
        .registerFactory("db",()=>db) // we need the db.
        .register("authorController", AuthorController)

}