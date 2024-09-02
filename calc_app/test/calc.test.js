var {Calculator}=require('../src/calc');
var {expect, should} = require('chai');
should();

describe('Calculator Final Version',function(){

    let calc;
    const value1=50;
    const value2=20;
    beforeEach(function(){
        calc=new Calculator();
    });


    it('should give correct result for valid operator',function(){
        calc.formatter= (_,__,___,result)=>{
           
            
            expect(result).to.equal(value1+value2);
            return result;
        }
        
        calc.execute(value1,"plus",value2);
        //how do we assert?
        
    });

    it('should give error for invalid operator',function(){
        
        calc.presenter=output=>{
            output.should.contains('Invalid operator');
        }
        calc.execute(value1,'invalid', value2);
        //how do we assert?
    });

    it('should give result based on added custom operator',function(){
        
        
        //arrange
        var customOperator= (x,y)=>1;
        calc.addOperator(customOperator,"c");
        calc.formatter= (_,__,___,result)=>result;

        calc.presenter=result=> result.should.equal(customOperator(value1,value2));
        
        //act
        calc.execute(value1,"c",value2);

        //assert?

    });

});