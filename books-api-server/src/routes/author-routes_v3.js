let express = require('express');
//let authorRepository= require('../repositories/in-memory/in-memory-author-repository');

let AuthorService = require('../services/author-service');
let AuthorRepository = require('../repositories/mongoose/mongoose-author-repository');

let AuthorController = require('../controllers/author-controller');

let authorRepository = new AuthorRepository();
const service=new AuthorService(authorRepository);
let authorController=new AuthorController(service);

const {handleRequest} = require('../utils/http-handler');




var authors = express.Router();

//Root:   /api/authors/
authors.route("/")
    .get(handleRequest(service.getAllAuthors))
    .post(handleRequest(authorController.addAuthor));


authors.route("/:authorId")
    .get(handleRequest(authorController.getAuthorById))
    .put(handleRequest(authorController.updateAuthor))
    .delete(handleRequest(authorController.removeAuthor));

authors
    .route("/:authorId/books")
    .get((request, response) => {
        response.status(501).send({message:'Not Yet Implemented',status:'Work in Progress',puprose:'GetAll Books by the Author'});
    })




module.exports = authors;



