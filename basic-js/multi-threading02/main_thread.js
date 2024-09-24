const {Worker} = require('worker_threads');

let _lastId=0;
const createWorker =  function(min,max){
    const id=++_lastId;
    const worker =new Worker('./multi-threading02/worker.js', {workerData:{id,min,max}});
    let primes=0;
    worker.on('message', (data)=>{
        if(data.status==='prime'){
            primes++;
        }else if(data.status==='done'){
            console.log(id,min,max,primes);
        }
    });

    return worker;
}

//step #1 create workers

const workers=[
    createWorker(0,500000),
    createWorker(0,50000),
    createWorker(0,200000)
];


console.log('created workers');
console.log('starting them in 5 seconds');


setTimeout(()=>workers.forEach(worker=> worker.postMessage("start")),5000);;