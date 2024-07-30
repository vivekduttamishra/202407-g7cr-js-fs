
var x= 50
var y= 15

function plus(x,y){
    return x+y;
}


console.log('typeof(plus)',typeof(plus));

console.log('plus.name',plus.name);

var add =plus;

console.log('typeof(add)',typeof(add));

console.log('add.name',add.name);

console.log('add(2,3)',add(2,3));

//--- even "plus" is a reference

plus=100;
console.log('typeof(plus)',typeof(plus));
console.log('plus',plus);

console.log('typeof(add)',typeof(add));
console.log('add.name',add.name);
console.log('add(2,3)',add(2,3));
