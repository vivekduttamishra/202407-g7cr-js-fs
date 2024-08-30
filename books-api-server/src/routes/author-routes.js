let express = require('express');
let authorController = require('../controllers/author-controller');



var authors = express.Router();

authors.route("/")
    .get(authorController.getAllAuthors)
    .post((request, response) => {
        response.send('creating a new author')
    });


authors.route("/:authorId")
    .get(authorController.getAuthorById)
    .put((request, response) => {
        response.send(`updating author ${request.params.authorId}`);
    })
    .delete((request, response) => {
        response.send(`deleting author ${request.params.authorId}`);
    });

authors
    .route("/:authorId/books")
    .get((request, response) => {
        response.send(`fetching books for author ${request.params.authorId}`);
    })




module.exports = authors;



