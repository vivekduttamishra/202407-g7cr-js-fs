function diceRoll(){
    return Math.floor(Math.random()*6) + 1;
}

var turns=[];
for(var i=0;i<10;i++){
    var turn = diceRoll();

    turns.push( turn);

}


console.log('turns',turns);

function factorial(n){
    
    //var n=5;
    
    var fn=1;
    while(n){
        fn*=n--;
    }

    return fn;
}


console.log('factorial(5)',factorial(5));
console.log('factorial(3)',factorial(3));



