var {findPrimes} = require('./prime-events');
var {Readable} = require('stream');

class PrimeStream extends Readable {

    constructor(min,max,options){
        super(options);
        this.min = min;
        this.max = max;
    }

    _read(){

        var e= findPrimes(this.min, this.max);
        e.on('PRIME', info=>{
            this.emit('data', Buffer.from(JSON.stringify(info)));
        });

        e.on('DONE',()=> this.emit('end'));

        e.on('ERROR',(info)=> this.emit('error',Buffer.from(JSON.stringify(info))));
    
    }
}

module.exports = {PrimeStream};
