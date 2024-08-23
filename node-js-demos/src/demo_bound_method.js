

function getName(){   
    return this.name
}


var p1={
    name:'Sanjay',
    getName      //now printName has become associated to "p1" which will act as this.
}

var p2={
    name:'Amit',
    getName:p1.getName //now global function uses 'p2' as the this context
};

console.log('p1.getName()',p1.getName());
console.log('p2.getName()',p2.getName());


function namePlatePrinter( getter){
    console.log('Printing the Name Plate for ',getter());
}

namePlatePrinter(p1.getName); //we are passing getName, not p1.getName
namePlatePrinter(getName.bind(p2)); //now we get a new instance of getName which will always use this  -> p2

var eat=function(){
    console.log(`${this.name} is eating`);
}

p2.eat =  eat.bind(p2); //it creates a new bounded instance of eat with this->p2

p2.eat();

p1.eat=p2.eat;

p1.eat();

console.log('p1.eat===eat',p1.eat===eat);
console.log('p1.eat===p2.eat',p1.eat===p2.eat);






