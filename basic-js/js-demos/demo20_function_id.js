function plus(x,y){ return x + y;}

function minus(x,y){ return x - y;}


function operatorSelector(operatorName){
    if(operatorName==='+')
        return plus;
    else if(operatorName==='-')
        return minus;
}


var add1= operatorSelector('+');
var add2= operatorSelector('+');

var substract=operatorSelector('-');

console.log('add1===add2',add1===add2);

console.log('add1===plus',add1===plus);

console.log('add1!==substract',add1!==substract);

console.log('substract===minus',substract===minus);





