const {Worker} =require('worker_threads');

let _task=0;
const createPrimeThread=(min,max)=>{
    _task++;
    const worker=new Worker('./multi-threading/worker.js',{workerData:{id:_task,min,max}});

    worker.on('message',(r)=>console.log(r.id,r.min,r.max,r.primes.length));

}

createPrimeThread(1,50000);
createPrimeThread(1,200000);
createPrimeThread(1,500000);

