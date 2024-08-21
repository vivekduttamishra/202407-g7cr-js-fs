var { should, expect } = require('chai');
var { donnable } = require('../src/test-utils')

should();

var { isPrimeSync } = require('../src/primes');
var { findPrimes } = require('../src/prime-events');

describe('findPrimes Events', function () {




    it('should return error on invalid range', function (done) {

        let event = findPrimes(10, 1);
        event.on('ERROR', response => {

            response.error.should.equal("Invalid Range");
            done();
        });

    });

    it('should return a prime with message="prime"', function (done) {


        let event = findPrimes(0, 100);

        event.on('PRIME', response => {
            expect(response.prime).to.not.be.undefined;
            expect(typeof response.prime).to.equal("number");
            isPrimeSync(response.prime).should.be.true;
        });

        event.on('DONE', () => done());
    });

    it('should called  message="prime" for every prime found', function (done) {

        findPrimes(0, 100)
            .on('DONE', (response) => {
                response.primes.should.equal(25);
                done();
            });

    });

    it('should call message:"progress" in a batch of 1000', done => {

        var count = 0;
        findPrimes(0, 20000)
            .on('PROGRESS', () => count++)
            .on('DONE', response => {
                count.should.equal(Math.ceil(response.max / 1000));
                done();
            });

    });





    it('should abort the process and return message:"abort" on received abort request from the client', done => {

        let aborted = false;
        var event = findPrimes(2, 20000);

        event.on('PRIME', (response) => {
            if (response.index === 100) {
                //send abort message to the service
                event.emit('ABORT');
            }
        })

        event.on('ABORTED', () => {
            done();
        });

        event.on('DONE', () => {
            done(new Error('ABORT REQUEST FAILED'));
        });


    });



});