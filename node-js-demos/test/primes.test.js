var { should } = require('chai');

should();

var { isPrimeSync, findPrimesSync } = require('../src/primes');

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