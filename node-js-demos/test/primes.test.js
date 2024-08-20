var { should, expect } = require('chai');

should();

var { isPrimeSync, findPrimesSync, findPrimes, findPrimesPromise } = require('../src/primes');

describe('isPrimeSync', function () {

    it('should return true for 2', () => {
        isPrimeSync(2).should.be.true;
    })

    it('should return false for 14', () => {
        isPrimeSync(14).should.be.false;
    })

    it('should return false for all values under 2', () => {
        for (let i = 1; i >= -20; i--) {
            isPrimeSync(i).should.be.false;
        }
    });

});

describe('findPrimesSync', function () {

    it('should return 4 primes under 10', () => {

        findPrimesSync(0, 10).should.deep.equal([2, 3, 5, 7]);

    });

    it('should return 25 primes under 100', () => {
        findPrimesSync(0, 100).should.have.length(25);
    })

    it('should return all prime numbers only', () => {

        // var primes=findPrimesSync(1,100);
        // for(var value of primes){
        //     isPrimeSync(value).should.be.true;
        // }


        findPrimesSync(1, 100).should.all.satisfy(isPrimeSync);
    })

});







describe('findPrimes with callback', () => {

    

    it('should return all primes under 10', function (done) {
        
        // the below code can't work as findPrimes doesn't return anything.
        //findPrimes(2,10,()=>{}).should.deep.equals([2,3,5,7]);
        var callbackCalled = false;
        findPrimes(2, 10, (error, primes) => {
           
            callbackCalled = true;

            expect(error).to.be.null;

            primes.should.deep.equal([2, 3, 5, 7]);
            done();
        });

        //we haven't entered the callback yet
        //we will enter later.
        callbackCalled.should.be.false;

        //we reach here immediately before assertion could run
        //we reached without error. Test passed
    });

    it('should return error for invalid range', (done) => {
        findPrimes(10, 2, (error, primes) => {
            expect(error.message).to.contain('Invalid Range');
            expect(primes).to.be.undefined;
            done();
        });
    });

    it('should return primes within valid range', (done) => {
        findPrimes(2, 100, (_, primes) => {
            primes.forEach(prime => isPrimeSync(prime).should.be.true);
            done();
        });
    });

    it('should finish the shorter job first',()=>{
        let start=performance.now();
        let end1=0,end2=0;
        findPrimes(0,20000,(_,primes)=>{
            end1=performance.now();
        });

        findPrimes(0,200, (_, primes) =>{
            end2=performance.now();
        });

        expect(end2).to.be.lessThan(end1);

    });

}).timeout(20000);


describe('findPrimesPromise', function() {
    this.timeout(10000);

    it('should return all primes under 10', () => {

        // the below code can't work as findPrimes doesn't return anything.
        //findPrimes(2,10,()=>{}).should.deep.equals([2,3,5,7]);
        var promise = findPrimesPromise(2, 10);

        return promise.then((primes) => {
            primes.should.deep.equal([2, 3, 5, 7]);
        });

    });

    it('should return error for invalid range', (done) => {
        findPrimesPromise(10, 2)
            .then(primes => expect.fail('should not enter then'))
            .catch((error) => {
                    try{

                        expect(error.message).to.contain('Invalid Value');
                        done(); //success. no error
                    }catch(e){
                        done(e);
                    }
                
            });
    });

    it('should return primes within valid range', () => {
        var promise= findPrimesPromise(2, 100)
            //completes after the promise is resolved. That is in future
            .then(primes => {
                //this assertion WILL execute when the promise is resolved.
                primes.forEach(prime => isPrimeSync(prime).should.be.false);
            });


        //since we return promise, mocha WILL wait for promise to be fulfilled (resolve/reject)
        return promise;
        
    });

    it('should starts findPrimes asynchronously', () => {

        var task1Start=performance.now();
        var p1=findPrimesPromise(2,200000);

        var task2Start=performance.now();
        var p2=findPrimesPromise(2,200);

        expect(task2Start-task1Start).to.be.lessThan(1);

    });

});