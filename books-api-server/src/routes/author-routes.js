let express = require('express');
const {handleRequest} = require('../utils/http-handler');
const {authenticate, authorize} =require('../utils/token-service');


//let authorRepository= require('../repositories/in-memory/in-memory-author-repository');
//let AuthorService = require('../services/author-service');
//let AuthorRepository = require('../repositories/mongoose/mongoose-author-repository');
//let AuthorController = require('../controllers/author-controller');
// let authorRepository = new AuthorRepository();
// const service=new AuthorService(authorRepository);
// let authorController=new AuthorController(service);

const {injector} = require('../utils/injector');


// var service = injector.lookup('authorService'); //created with undefined repository
// service.repository=injector.lookup('authorRepository');

// var controller = injector.lookup('authorController'); //created with undefined service
// controller.service=service;

var authorController = injector.lookup('authorController');


var authors = express.Router();

//Root:   /api/authors/
authors.route("/")
    .get(handleRequest(authorController.getAllAuthors))
    .post(authenticate, handleRequest(authorController.addAuthor));


authors.route("/:authorId")
    .get(handleRequest(authorController.getAuthorById))
    .put(authenticate,handleRequest(authorController.updateAuthor))
    .delete(authorize('admin','moderator'),handleRequest(authorController.removeAuthor));

authors
    .route("/:authorId/books")
    .get((request, response) => {
        response.status(501).send({message:'Not Yet Implemented',status:'Work in Progress',puprose:'GetAll Books by the Author'});
    })




module.exports = authors;



