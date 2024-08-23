var {PrimeStream} = require('./prime-stream');
var fs= require('fs');


var primes= new PrimeStream(1,100);

//primes.on('data', d=>console.log(d.toString()));

//primes.pipe(process.stdout);

primes
    .pipe(filterStream(info=> info.prime%10===7))
    .pipe(mapStream(data=> data.prime))
    .pipe(fs.createWriteStream('primes.json'));