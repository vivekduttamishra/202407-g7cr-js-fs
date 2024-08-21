var { should, expect } = require('chai');
var {donnable}=require('../src/test-utils')

should();

var { findPrimesInteractive,isPrimeSync } = require('../src/primes');


describe('findPrimesInteractive',function(){

    it('should raise error if no callback is provided', function(){

        expect(()=>findPrimesInteractive()).to.throw('callback not specified');

    });


    it('should return a unqiue id for each findPrimesInteractive calls',function(){

        var id1=findPrimesInteractive(2,10,response=>{});
        var id2=findPrimesInteractive(10,20,response=>{});

        (typeof(id1)).should.equal("number");
        id2.should.equal(id1+1);

    });


    it('should return error on invalid range',function(done){

        const id= findPrimesInteractive(10,1, response=>{
            response.id.should.equal(id);
            response.message.should.equal("error");
            response.error.should.equal("Invalid Range");
            done();
            
        });

    });

    it('should return a prime with message="prime"',function(done){

        
        findPrimesInteractive(0,100, response=>{
            if(response.message==="prime"){
                expect(response.prime).to.not.be.undefined;
                expect(typeof response.prime).to.equal("number");
                isPrimeSync(response.prime).should.be.true;
            }
            if(response.message==="done")
                done();
        });

    });
    it('should called  message="prime" for every prime found',function(done){

        let primesFound=0;
        findPrimesInteractive(0,100, response=>{
            if(response.message==="prime"){
                primesFound++;
            }
            if(response.message==="done"){
                expect(primesFound).to.equal(response.primes.length);
                done();
            }
        });

    });

    it('should call message:"progress" in a batch of 1000', done=>{

        var count=0;
        findPrimesInteractive(0,20000, response=>{

            if(response.message==="progress"){
                count++;
                response.done.should.equal(count*1000);
            }

            if(response.message==="done"){
                expect(count).to.equal(Math.ceil(response.max/1000));
                done();
            }


        });

    });

    it('sends one prime value at a time', done=>{
        
        var primes=[];
        findPrimesInteractive(0,100, response=>{ 
            if(response.message==="prime"){
                primes.push(response.prime);
            }

            if(response.message==="done"){
                primes.length.should.be(25);
            }

        });
    });

    it('should abort the process and return message:"abort" on received abort request from the client', done=>{

        let aborted=false;
        findPrimesInteractive(2,200000, response=>{

            if(response.message==="prime" ){
                if(response.index===1000){
                    //we found 1000th prime.
                    //now I want to abort the task from going further.
                    //?????
                }
                if(response.index>1000){
                    done(new Error(`Didn't stop at the specified mark. God ${response.index}`))
                    return;
                }
            }

            if(response.message==="abort"){
                //test is successful
                aborted=true;
                done();
            }          
            
            if(response.message==="done"){
                done(new Error('Process was NEVER aborted'));
            }

        });
        

    });

});