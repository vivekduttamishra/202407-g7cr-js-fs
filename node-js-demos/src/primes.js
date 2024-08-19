

function isPrimeSync(value){
    if(value<2)
        return false;

    for(var i=2;i<value;i++){
        if(value%i===0)
            return false;
    }

    return true;
}

function findPrimesSync(min,max){
    var primes=[];
    for(let i=min;i<max;i++){
        if(isPrimeSync(i))
            primes.push(i);
    }

    return primes;
}


module.exports={
    isPrimeSync,
    findPrimesSync
};