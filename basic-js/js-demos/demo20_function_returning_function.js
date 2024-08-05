function plus(x,y){ return x + y;}

function minus(x,y){ return x - y;}


function operatorSelector(operatorName){
    if(operatorName==='plus')
        return plus;
    else
        return minus;
}


var x = operatorSelector('plus'); //returns plus function.
console.log('x',x);

var result = x(20,30); //plus function is called
console.log('result',result);


var result2= operatorSelector('minus')(20,5);

console.log('result2',result2);
