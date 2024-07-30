
var x= 50
var y= 15

function plus(x,y){
    return x+y;
}


var minus = function substract(x,y){
    return x-y;
}

//console.log('substract.name',substract.name);


console.log('minus.name',minus.name);
console.log(`minus(${x},${y})`,minus(x,y));


var multiply=function(x,y){
    return x*y;
}

console.log('multiply(x,y)',multiply(x,y));
console.log('multiply.name',multiply.name);

var factorial = (n)=>{
    var fn=1;
    for(var i=1; i<=n; i++){
        fn*=i;
    }
    return fn;
}

console.log('factorial(5)',factorial(5));


var divide = (x,y) => x/y;

console.log('divide.name',divide.name);
console.log('divide(10,3)',divide(10,3));
