

namespace Demo04{

    type Name={
        firstName:string;
        middleName?:string; //optional
        lastName:string;
    }

    type Author={

        name:Name|string;  //a structured name of a simple name
        email?:string; //string or undefined
        biography:string; //string 
        photo:string; //string 
        tags?: string | string[]; //optional array of string
    }
    
    interface Book{
        title:string;
        author:Author,
        price:number;
        rating?:number;
        cover?:string
        description?:string
    }



    var authors:Author[]=[

        {
            name: {firstName:'Vivek', middleName:'Dutta', lastName:'Mishra'},
            email: 'alice@example.com',
            biography: 'Author of The Lost Epic Series',
            photo: 'vivek.jpg',
            tags: ['Fiction', 'Mahabharata']
        },
        {
            name:{firstName: 'Jeffrey', lastName:'Archer'},
            biography:' One ofthe contemporary best seller',
            photo:'jeffrey.jpg',
            tags:'best-seller, english'
            
        },

        {
            name:'John Grisham',
            biography:'Author of "The Great Gatsby"',
            photo:'john_grisham.jpg',
            tags:['Fiction', 'Dystopian']
        },

        {
            name:{firstName:'Ramdhari', lastName:'Singh'},
            biography:'Author of Rashmirathi',
            photo:'ramdhari.jpg',
            tags:['Poetry', 'History']
        }
    

    ]

    function getAuthor(name:string){
    
        var author = authors.find( a=>{

            if(typeof(a.name) === 'string')
                return a.name.toLowerCase()===name.toLowerCase();
            else{
                var _name= `${a.name.firstName} ${a.name.middleName} ${a.name.lastName}`.toLowerCase();
                return _name===name.toLowerCase();
            }
        });
        
        if(author===undefined)
            throw new Error(`Author not found: ${name}`);

       

        return author;

    }

    var books:Book[]=[
        {
            title: 'The Lost Epic Series',
            author: authors[0],
            price: 19.99,
            rating: 4.5,
            cover: 'lost_epic_series.jpg',
            description: 'This is a collection of epic fantasy novels by Vivek Mishra'
        },
        {
            title: 'Kane and Abel',
            author: getAuthor('Jeffrey Archer'),
            price: 12.99,
            rating: 4.2,
            cover: 'kane_abel.jpg',
            description: 'This is a biographical novel by Jeffrey Archer'
                
        }
    ]

  
}