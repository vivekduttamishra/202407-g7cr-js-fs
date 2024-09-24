const {parentPort, workerData} = require('worker_threads');



const isPrime = (number)=>{
    if(number<2)
        return false;

    for(let i=2;i<number;i++)
        if (number%i===0)
            return false;
    return true;
}

const findPrimesSync=(min,max)=>{
    console.log('finding primes',min,max);
    const primes=[];
    let index=0;
    for(let i=min;i<=max;i++){
        if(isPrime(i)){
            index++;
            parentPort.postMessage({...workerData, index,prime:i, status:"prime"})
        }

    }
    
    parentPort.postMessage({...workerData, status:"done"})
}
console.log('worker created',workerData);
parentPort.on('message', data=>{

    if(data==="start"){
        console.log('worker started', workerData);
        findPrimesSync(workerData.min,workerData.max);
    }

});

