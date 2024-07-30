function factorial(n){
    var fn=1;
    
    while(n) // n!==0 
        fn*=n--;

    return fn;
}

console.log('factorial(5)',factorial(5));
console.log('factorial(0)',factorial(0));
