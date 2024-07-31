function showPerson(p){
    
    console.log('p',p);
    console.log('p.name',p.name);
    console.log('p.age',p.age);
}
    
//Approach #1 for 
//new operator syntax
var p1 = new Object();

//Attaching property using dot ntation (object notation)
p1.name='Sanjay';
p1.age=50;
showPerson(p1);

//Approach #2
// JS Syntax
var p2={}; //same as new Object()

p2.name='Shivanshi';
p2.age=18;
showPerson(p2);


//Approach #3
var p3={
    name:'Sudhir',
    age:35
};

p3.gender='Male';

showPerson(p3);
console.log('p3.gender',p3.gender);


//Approach #4 dictionary notation
var p4={
    name:'Shashank',
    age:24
};

p4['gender']='Male';
p4.email='shashank@gmail.com';

console.log('p4["name"]',p4["name"]);
console.log('p4["email"]',p4["email"]);
console.log('p4.gender',p4.gender);

function showObject(x){
    for(var k in x)
        console.log(k, x[k]);

    console.log('--------------\n\n');
 
}

showObject(p1);
showObject(p2);
showObject(p3);
showObject(p4);



var e= {
    name:'John Doe',
    empId:4,
    department:'HR',
    address:{
        street:'123 Main St',
        city:'New York',
        state:'NY'
    }
}

showObject(e);









