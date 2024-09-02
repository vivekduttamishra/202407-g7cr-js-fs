var {Calculator}=require('../src/calc01');

var {expect, should} = require('chai');
should();

describe('Calculator V1',function(){

    let calc;
    const value1=50;
    const value2=20;
    let result;
    const resultLogger = output=> result=output;

    const originalConsoleLogger = console.log;

    beforeEach(function(){
        calc=new Calculator();
        console.log=resultLogger;
    });

    this.afterEach(function(){
        console.log=originalConsoleLogger;
    })


    it('should give correct result for valid operator',function(){
        
        calc.execute(value1,"+",value2);
        //how do we assert?
        result.should.equal(`${value1} + ${value2} = ${value1+value2}`);    
    });

    it('should give error for invalid operator',function(){
        calc.execute(value1,'invalid', value2);
        //how do we assert?
    });


});