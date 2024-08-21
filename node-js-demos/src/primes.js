

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

//should return abort message and exit
const primeRange = function *(min,max){

    for(var i=min;i<max;i++){
        if(isPrimeSync(i)){

            var result = yield i;
        
            if(result==="abort"){
                yield {message: 'aborted', lastValueChecked:i};
                return ;
            }
                
        }
    }
}

/**
 * 
 * @param {*} min 
 * @param {*} max 
 * @param {*} cb
 *  The cb object can be invoked multiple times with different possible values
 *  cb should take a single object as parameter
 *  { message:"error", error:"invalid range" taskId:2,min,max}
 *  { message:"progress", done:13000, primes:1492, taskId:2 min:2,max:20000} 
 *  { message:"done", primes:[...], taskId,min,max}
 *  { message:"aborted", primes:[...], taskId, abortedAt:14999 }
 *  { message:"prime", taskId, min,max, index:3, value:7}
 */
var tasks=0;
function findPrimesInteractive(min,max, cb){

    var low=min;
    var high=Math.min(max,min+1000);
    var id=++tasks;
    var index=0;
   
    const iid= setInterval(()=>{
        if(max<=min){
            cb({ message:"error", id, min, max, error:"Invalid Range"});
            clearInterval(iid);
            return ;
        }

        for(let i=low;i<high;i++){
            if(isPrimeSync(i)){
                index++;
                cb({ message:"prime", id, min, max, index, prime:i});
            }
        }
        cb({message:"progress",id,min,max,done:(high-min), primes:index})

        low=high;
        high=Math.min(max,low+1000);
        if(low>=high){
            //all done
            cb({ message:"done", id, min, max, primes});
            clearInterval(iid);
            return ;
        }

    },1);

    return id;
}





module.exports = {
    isPrimeSync,
    findPrimesSync,
    findPrimes,
    primeRange,
    findPrimesInteractive,
    findPrimesPromise:findPrimes //alias name for findPrimes
};