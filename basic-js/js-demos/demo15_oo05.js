
function eat(food){
    console.log(`${this.name} eats ${food}`);
    
    
    
}

var sanjay={name:'Sanjay',eat:eat}

var amit={
    name: 'Amit', 
    eat  //ES2015 shortcut for  eat:eat 
};


amit.eat('Lunch');

sanjay.eat('Dinner');


var name='John Doe'; //window.name='John Doe'

eat('Dinner'); //using this.name=>window.name
