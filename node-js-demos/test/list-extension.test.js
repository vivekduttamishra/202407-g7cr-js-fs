var {expect,should} =require('chai');
var {LinkedList} = require('../src/list')
var {isPrimeSync} = require('../src/primes');
require('../src/list-extension')
should();


describe('LinkedList Generator Tests',function(){

        let list;

        beforeEach(function(){
            list=new LinkedList();
            for(let i=0;i<100;i++)
               list.append(i); 
        });

        describe('filter',function(){
            it('should return a generator',function(){
            
                list.filter.constructor.name.should.equal('GeneratorFunction');
                
            })
            it('should filter all prime numbers using for-of', function(){
                var result = list.filter(isPrimeSync);

                for(let value of result){
                    isPrimeSync(value).should.be.true;
                }
            });

            it('should be spreadable',()=>{
                var primes= new LinkedList();

                primes.append( ...list.filter(isPrimeSync));

                primes.size().should.equal(25);

                primes.forEach( value=> isPrimeSync(value).should.be.true);

            });

        });

});