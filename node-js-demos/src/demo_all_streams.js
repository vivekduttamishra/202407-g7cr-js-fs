var {p, Collector} = require('./stream-utils');
var {PrimeStream} = require('./prime-stream');


var result=[];

var primes = new PrimeStream(1,100);

primes
    .pipe(p(x=>JSON.parse(x).prime.toString()))
    .pipe(p( x=> parseInt(x)%10===7? x :undefined))
    .pipe(new Collector(x=> result.push(parseInt(x))))
    .on('close',()=>{
        console.log('result',result);
        
    })

    

