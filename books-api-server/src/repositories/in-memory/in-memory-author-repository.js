
let NotFoundException = require('../../utils/not-found');

var authors= [
    {id: 'vivek-dutta-mishra', name:'Vivek Dutta Mishra',biography:'Author of the Lost Epic Series'},
    {id:'dinkar', name:'Ramdhari Singh Dinkar',biography:'National Poet of India'},
]

class InMemoryAuthorRepository{

    
    async getAllAuthors(){
        return authors;

    }
    async getAuthorById(id){
        let author= authors.find(author => author.id === id);
        if(author)
            return author;
        else
            throw new NotFoundException( "Author Not Found",{id});
    }

}

module.exports=new InMemoryAuthorRepository();