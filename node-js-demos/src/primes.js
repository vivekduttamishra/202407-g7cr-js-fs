

function isPrimeSync(value) {
    if (value < 2)
        return false;

    for (var i = 2; i < value; i++) {
        if (value % i === 0)
            return false;
    }

    return true;
}

function findPrimesSync(min, max) {
    var primes = [];
    for (let i = min; i < max; i++) {
        if (isPrimeSync(i))
            primes.push(i);
    }

    return primes;
}

function findPrimes(min,max,cb){
    return new Promise((resolve,reject)=>{

        var primes=[];
        var low=min;
        var high= Math.min(max,min+1000);
        if(cb===undefined) 
            cb=()=>{}; //define a dummy callback



        if(min>=max){
            reject(new Error(`Invalid Range (${min}-${max})`));
            
            cb(new Error(`Invalid Range (${min}-${max})`));
            return;
        }

        const iid= setInterval(()=>{


            for(let i=low;i<high;i++){
                if(isPrimeSync(i))
                    primes.push(i);
            }

            low=high;
            high=Math.min(max,low+1000);
            if(low>=high){
                //all done
                resolve(primes);
                cb(null,primes);
                clearInterval(iid); //stop the interval
                return;
            }


        },1);

    });
}


module.exports = {
    isPrimeSync,
    findPrimesSync,
    findPrimes,
    findPrimesPromise:findPrimes //alias name for findPrimes
};