var { Collector,filter,map} = require('./stream-utils');
var {PrimeStream} = require('./prime-stream');


var result=[];

var primes = new PrimeStream(1,100);

primes
    .pipe(filter(info=>info.prime.toString())
    .pipe(p( x=> parseInt(x)%10===7? x :undefined))
    .pipe(new Collector(x=> result.push(parseInt(x))))
    .on('close',()=>{
        console.log('result',result);
        
    })

    

