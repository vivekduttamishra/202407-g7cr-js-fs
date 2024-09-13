
let NotFoundException = require('../../utils/not-found-exception');
let {v4}= require('uuid');


export interface Author{
    id:string,
    name:string,
    biography:string, 
}

var authors:Author[]= [
    {id: 'vivek-dutta-mishra', name:'Vivek Dutta Mishra',biography:'Author of the Lost Epic Series'},
    {id:'dinkar', name:'Ramdhari Singh Dinkar',biography:'National Poet of India'},
]

export class InMemoryAuthorRepository{

    
    getAllAuthors=async()=>{
        return authors;

    }

    getAuthorById=async (id:string)=>{
        let author= authors.find(author => author.id === id);
        if(author)
            return author;
        else
            throw new NotFoundException( "Author Not Found",{id});
    }

    addAuthor=async(author:Author)=>{
        
        authors.push(author);

        return author;
    }
    removeAuthor=async(id:string)=>{
        authors=authors.filter(author => author.id !== id);
    }
    updateAuthor=async(id:string,author:Author)=>{
        authors=authors.map(dbAuthor => dbAuthor.id === id?author:dbAuthor);
    }
   

}

