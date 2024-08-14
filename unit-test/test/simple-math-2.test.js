var {plus,minus,multiply,divide}=require('../src/simple-math');
var {test} = require('node:test');
var assert=require('assert');



var x=10;
var y=5;

test('plus should add two numbers',function(){
    var result = plus(x,y);
    assert.equal(x+y, result);

});
test('minus should substract two numbers',()=>{
    var result = minus(x,y);
    
    assert.equal(x-y, result);
    
});
// test('multiply should multiply two numbers',()=>{

//     assert.equal(x*y, multiply(x,y));
// })
test('divide should divide first number with second',()=>{
    assert.equal(x/y, divide(x,y));
});