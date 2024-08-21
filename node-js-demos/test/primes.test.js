var { should, expect } = require('chai');
var {donnable}=require('../src/test-utils')

should();

var { isPrimeSync,primeRange, findPrimesSync, findPrimes, findPrimesPromise } = require('../src/primes');
var {LinkedList} = require('../src/list');


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
        // findPrimes(2, 10, (error, primes) => {
           
        //     callbackCalled = true;

        //     expect(error).to.be.null;

        //     primes.should.deep.equal([2, 3, 5, 7]);
        //     done();
        // });



        findPrimes(2,10, donnable(done, (errors,primes)=>{
            callbackCalled = true;
            expect(errors).to.be.null;
            primes.should.deep.equal([2, 3, 5, 7]);
        }));



        //we haven't entered the callback yet
        //we will enter later.
        callbackCalled.should.be.false;

        //we reach here immediately before assertion could run
        //we reached without error. Test passed
    });

    it('should return error for invalid range', (done) => {
        findPrimes(10, 2, donnable(done,(error, primes) => {
            expect(error.message).to.contain('Invalid Range');
            expect(primes).to.be.undefined;
            
        }));
    });

    it('should return primes within valid range', async() => {
        var primes = await findPrimes(2, 100);

        primes.should.all.satisfy(p=>isPrimeSync(p))

    });

    it('should finish the shorter job first',(done)=>{
        
        let longJobFinished=false;
        let shortJobFinished=false;

        findPrimes(0,20000,(_,primes)=>{
            longJobFinished=true;
        });

        findPrimes(0,5000,donnable(done, (_, primes) =>{
            shortJobFinished=true;
            longJobFinished.should.be.false;
  
        }));

        //expect(shortJobTimeTaken).to.be.lessThan(longJobTimeTaken);

    });

    it('should allow execution of next async function even with await blocking current one',(done)=>{

        async function findPrimesAndNotify(min,max,cb){
            var primes= await findPrimes(min,max);
            //we come here when findPrimes finishes
            cb(primes);

            //but this function will return immediately with a promise.
        };

        var shorterTaskFinished=false,longJobFinished=false;

        findPrimesAndNotify(0,2000,_=>{
            longJobFinished=true;
        });

        findPrimesAndNotify(0,500,donnable(done,(()=>{
            shorterTaskFinished=true;
            longJobFinished.should.be.false;
        })));


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
        // findPrimesPromise(10, 2)
        //     .then(primes => expect.fail('should not enter then'))
        //     .catch((error) => {
        //             try{

        //                 expect(error.message).to.contain('Invalid Range');
        //                 done(); //success. no error
        //             }catch(e){
        //                 done(e);
        //             }
                
        //     });


        findPrimesPromise(10,2)
            .catch( donnable(done, error=>{
                expect(error.message).to.contain('Invalid Range');
            }));

    });

    it('should return primes within valid range', () => {
        var promise= findPrimesPromise(2, 100)
            //completes after the promise is resolved. That is in future
            .then(primes => {
                //this assertion WILL execute when the promise is resolved.
                primes.forEach(prime => isPrimeSync(prime).should.be.true);
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

    it('should finish the shorter job first',(done)=>{
        var start=performance.now();
        
        let largeTaskTime;
        let smallTaskTime;

        var promise1= findPrimes(2,10000).then(_=> largeTaskTime=performance.now()-start);
        var promise2= findPrimes(2,200).then(_=> {
            smallTaskTime=performance.now()-start
            expect(largeTaskTime).to.be.undefined; //largerTask hasn't finished yet.
        });

        //wait for both promises to finish.
        Promise
            .all([promise1,promise2]) //wait for all promises to complete
            .then(donnable(done,_=>{
                smallTaskTime.should.be.lessThan(largeTaskTime);
            }));


    });

});

describe('primeRange', function(){

    let range;
    const expectedValues=[2,3,5,7];

    beforeEach(()=>{
        range=primeRange(0,10);
    });

    it('should match the expected values',()=>{
        //range.length.should.equal(expectedValues.length);
        for(var i=0; i<expectedValues.length; i++){
            range.next().value.should.equal(expectedValues[i]);
        }
    });  
    
    it('should be convertable to a regular list using spread',()=>{
        let range=primeRange(0,10);
        var results=[...range];
        results.should.deep.equal(expectedValues);

    });

    it('should be convertable to a LinkedList using spread', ()=>{
        var list=new LinkedList(...range);

        list.size().should.equal(expectedValues.length);
    })

    it('should abort on receiving abort message',()=>{

        //Arrange
        range.next(); //{value:2, done:false}
        range.next(); //{value:3, done:false}

        //Act
        var result= range.next('abort'); //{value:{message: 'aborted',lastValueChecked: 3},done:false}
        
        //Assert
        result.should.be.an('object').and.have.property('done', false);
        result.value.should
                        .have.property('message','aborted');
        result.value.should.have.property('lastValueChecked',3);

    });

});