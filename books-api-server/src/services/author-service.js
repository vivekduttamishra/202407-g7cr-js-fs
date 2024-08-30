

class AuthorService{

    constructor(authorRepository){
        this.authorRepository = authorRepository;
    }

    getAllAuthors(){
        return this.authorRepository.getAllAuthors();
    }

    getAuthorById(id){
        return this.authorRepository.getAuthorById(id);
    }


}


module.exports = AuthorService;