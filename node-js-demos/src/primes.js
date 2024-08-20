

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
function _findPrimesPromiseV1(min, max) {

    return new Promise((resolve, reject) => {
        if (max <= min) {
            reject(new Error(`Invalid Range (${min}-${max})`)); //error
            return;
        }

        var primes = [];
        for (let i = min; i < max; i++) {
            if (isPrimeSync(i))
                primes.push(i);
        }

        resolve(primes); //success
    });

}
function findPrimesPromise(min, max) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (max <= min) {
                reject(new Error(`Invalid Range (${min}-${max})`)); //error
                return;
            }

            var primes = [];
            for (let i = min; i < max; i++) {
                if (isPrimeSync(i))
                    primes.push(i);
            }

            resolve(primes); //success
        }, 1000);
    });

}


function _findPrimesV1(min, max, cb) {

    if (max <= min) {
        cb(new Error(`Invalid Range (${min}-${max})`)); //error
        return;
    }


    var primes = [];
    for (let i = min; i < max; i++) {
        if (isPrimeSync(i))
            primes.push(i);
    }

    //return primes;
    cb(null, primes); //success
}
function findPrimes(min, max, cb) {

    setTimeout(() => {

        if (max <= min) {
            cb(new Error(`Invalid Range (${min}-${max})`)); //error
            return;
        }


        var primes = [];
        for (let i = min; i < max; i++) {
            if (isPrimeSync(i))
                primes.push(i);
        }

        //return primes;
        cb(null, primes); //success
    }, 1000);


}


module.exports = {
    isPrimeSync,
    findPrimesSync,
    findPrimes,
    findPrimesPromise
};