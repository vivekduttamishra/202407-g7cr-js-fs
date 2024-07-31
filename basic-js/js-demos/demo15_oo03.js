function showObject(x,showBehaviors=false){
    for(var k in x)
        if(showBehaviors || typeof(x[k])!=='function')
            console.log(k, x[k]);
}

function eat(person,food){
    console.log(`${person.name} eats ${food}`);
}

var sanjay=new Object();
sanjay.name='Sanjay';
sanjay.age=50;
sanjay.show=showObject;
sanjay.eat=eat;

sanjay.show(sanjay);
sanjay.eat(sanjay,'Lunch');




var amit={
    name: 'Amit', 
    email:'amit.gmail.com',
    age:50,
    show: showObject

};

amit["eat"]=eat;

amit.show(amit);
amit.eat(amit, 'Maggi');