namespace PeopleManagement{
    
    class Person{
        static  _count:number=0;
        private _id:number;
        //private _name:string;

        //private _email:string|undefined;
    
        constructor(private name:string, private email:string){
            this._id= ++Person._count;
            
            
        }
    
        toString(){
            return `Person[id=${this._id}, name=${this.name}, email=${this.email}]`;
        }       
    }

    var p1 = new Person('Sanjay','sanjay@gmail.com');
    var p2 = new Person('John','john@gmail.com');



    


    //p1.name="New Name";
    console.log(p1);
    console.log(p2);
}



