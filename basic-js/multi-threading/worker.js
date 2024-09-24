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
    for(let i=min;i<=max;i++){
        if(isPrime(i))
            primes.push(i);
    }
    
    return primes;
}

//workerData contains information send my parent initially.
const primes = findPrimesSync(workerData.min, workerData.max);

//parentPort is how we send message to main thread when work completes
parentPort.postMessage({...workerData, primes})

module.exports={findPrimesSync};