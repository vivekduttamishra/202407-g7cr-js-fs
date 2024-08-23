var {findPrimes} =require('./prime-events')
var fs=require('fs')

var target=fs.createWriteStream("primes.txt");

findPrimes(0,2000).pipe(target);