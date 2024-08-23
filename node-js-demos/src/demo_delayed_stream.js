var {DelayedStream,p} = require('./stream-utils');


function *range(min,max){

    for(var i=min;i<max;i++)
        yield i;

}


var readable  = new DelayedStream(()=>range(1,10),  1000);

readable.pipe(p(d=> d+"\t")).pipe(process.stdout);





