var {primeRange} = require('./primes')


var frequency={};
for(var prime of primeRange(2,1000)){
    var key=prime%10;
    if(frequency[key])
        frequency[key]++;
    else
        frequency[key]=1;
}   

console.log('frequency',frequency);


