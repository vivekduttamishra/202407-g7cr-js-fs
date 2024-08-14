var {plus,minus,multiply,divide}=require('../src/simple-math');
var {it,describe} = require('node:test');
var assert=require('assert');


describe('simple math tests', ()=>{
    var x=10;
    var y=5;

    it('should add two numbers',function(){
        var result = plus(x,y);
        assert.equal(x+y, result);
    
    });

    it.only('should substract two numbers',()=>{
        var x=10, y=5;
        var result = minus(x,y);
        
        assert.equal(x-y, result);
        
    });
    
    it('multiply should multiply two numbers',()=>{
    
        assert.equal(x*y, multiply(x,y));
    })
    it('divide should divide first number with second',()=>{
        assert.equal(x/y, divide(x,y));
    });

});

