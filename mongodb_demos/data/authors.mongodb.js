// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('g7cr_202408');

// Find All the Authors 
db.getCollection('authors').find({
    name:/vivek/i
});
