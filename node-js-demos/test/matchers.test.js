require('mocha');
var {expect,should} = require('chai');

should(); //call should to enable should design.



var {take,distinct}= require('../src/matchers').matchers;


describe('Matchers', ()=>{

    describe('take',()=>{

        it('should return true for take(1)',()=>{
            expect(take(1)()).to.be.true;
        });

        it('should return true for n time',()=>{
            var n=4;
            var matcher=take(n);

            for(var i=0;i<n;i++){
                //expect(matcher("anything")).to.be.true;
                var result = matcher("anything");

                result.should.be.true;
            }

        });

        it('should return undefined after n calls',()=>{
            var n=10;
            var matcher= take(n);
            for(var i=0; i<n;i++){
                matcher("anything");
            };

            expect(matcher("anything")).to.be.undefined;

        });

        it('should return true when matcher return true',()=>{

            var is_even = n=>n%2===0;

            expect(take(1,is_even)(2)).to.be.true;

        });

        it('should return false when matcher return false',()=>{

            var is_even = n=>n%2===0;

            expect(take(1,is_even)(3)).to.be.false;

        });

        it('should return matcher output for first n attempts',()=>{
            var n=4;
            var _realMatcher= (n)=>n%2===0;

            var takeMatcher = take(n,_realMatcher);

            for(var i=0;i<n;i++){
                expect(takeMatcher(i)).to.be.equal(_realMatcher(i));
            }
        });
        it('should return undefined output after n "true" false',()=>{
            var n=4;
            var isEven= (n)=>n%2===0;

            var takeMatcher = take(n,isEven);
            var passedTests=0;
            var i=0;
            while(true){
                var result =takeMatcher(i);
                if(result===undefined)
                    break;
                if(result)
                    passedTests++;
                i++;
            }

            expect(passedTests).to.be.equal(n);
            expect(i).to.be.greaterThan(passedTests);
           
        });


    });

    describe('skip',()=>{

        it('should skip first n items',()=>{
            expect.fail('not yet implemented');
        });

    });

    describe('distinct',()=>{
        var _distinct=null ;

        beforeEach(()=>{
            _distinct = distinct(n=>n);
        });

        it('should return true for uqniue item',()=>{
            expect(_distinct(2)).to.be.true;
            expect(_distinct(3)).to.be.true;
        });


        it('should return false for a duplicate item',()=>{

            _distinct(3);
            
            //expect(_distinct(3)).to.be.false;

            _distinct(3).should.be.false;
        });


    })


})