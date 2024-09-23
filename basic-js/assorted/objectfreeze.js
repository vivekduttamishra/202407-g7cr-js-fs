let p = {name:"Sanjay", age:30 };

p.email="sanjay@gmail.com" ; //allowed
p.age=40; //allowed

console.log('p',p); //with updated and new fields.


//freeze it

Object.freeze(p);


p.email="sanjay2@gmail.com"; //can't change value of exisitng key
p.phone="9939393" //can't add any new key.

//object will not change. no error generated
console.log('p',p);

