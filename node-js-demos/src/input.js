var {EventEmitter} = require('events');




var event = new EventEmitter();
var inputs=["principal","rate","period"];
var prompts=["principal","rate","period"];
var index=0;

process.stdout.write('principal ?');
process.stdin.on('data',function(data){
    event.emit(inputs[index], data);
    index++;
    if(index==inputs.length)
        event.emit("done");
    else
        process.stdout.write(`${prompts[index]} ? `);
})

let principal, rate, period;

event
    .on('principal',x=> principal=parseFloat(x) )
    .on('rate',x=> rate=parseFloat(x))
    .on('period',x=> period=parseFloat(x))

    .on('done',x=>{
        const interest = principal*rate*period/100;
        console.log('interest',interest);
        process.exit(0);
    });


