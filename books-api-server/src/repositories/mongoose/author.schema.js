var mongoose = require('mongoose');

var authorSchema = new mongoose.Schema({
    id:string,
    name:string,
    biography:string,
    cover:string,
    tags:[string]
});


/**
 * Parameter
 * 1. Model Name: Identifies the current inside mongoose framework.
 *     * With this framework, I can access the current Model from mongoose library.
 *     * It is like a key in a model collection inside mongoose.
 * 2. The schema that should be stored with mongoose
 * 3. (optional) Name of the collection in mongo db. 
 *       * if not provides, uses the model name for the same

*/
const Author= mongoose.model('Author', authorSchema,"authors");

module.exports=Author;