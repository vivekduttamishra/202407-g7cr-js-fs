
function eat(person,food){
    console.log(`${person.name} eats ${food}`);
}

var sanjay={name:'Sanjay',eat:eat}

var amit={
    name: 'Amit', 
    eat  //ES2015 shortcut for  eat:eat 
};


amit.eat(sanjay, 'Lunch');

