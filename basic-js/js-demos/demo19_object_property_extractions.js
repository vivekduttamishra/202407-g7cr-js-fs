
var person={
    name:'Sanjay',
    age:50,
    email:'sanjay@gmail.com',
};

console.log('person',person);

//what if I need to store name and age of person in separate variables
//ES5 (and other languages)
var name=person.name;
var age=person.age;

console.log('name',name);
console.log('age',age);


//ES2015

var {name,age}=person; 
console.log('name',name);
console.log('age',age);


//ES5
var officialEmail = person.email;
console.log('officialEmail',officialEmail);

//ES2015

var {email:personalEmail} = person;
 
console.log('personalEmail',personalEmail);
