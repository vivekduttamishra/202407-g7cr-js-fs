var { executor, connect } = require('./connection');

var url = 'mongodb://localhost/';
var authorsExecutor = executor(url, "g7cr_202408", "authors");

async function getAllAuthors() {
    return await authorsExecutor(async authors => {
        console.log('getting the authors');
        return await authors.aggregate([
            {
                $project: {
                    biography: 0,
                    _id: 0
                }
            }]).toArray();
    });
}

//{id:'vivek-dutta-mishra', name:'Vivek Dutta Mishra', biography:''}

async function addAuthor(author) {
    return await authorsExecutor(async authors => {
        return await authors.insertOne(author);
    });
}

async function getAuthorById(id) {

    var connection = await connect(url);
    var db = connection.db('g7cr_202408');
    var authors = db.collection('authors');
    var author = await authors.findOne({ id });
    return author;

}


module.exports = {
    getAllAuthors,
    getAuthorById,
    addAuthor
}