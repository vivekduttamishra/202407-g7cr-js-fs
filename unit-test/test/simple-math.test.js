var {plus,minus,multiply,divide}=require('../src/simple-math');
var {test} = require('node:test');
var {assertEquals}=require('../src/asserts');



var x=10;
var y=5;

test('plus should add two numbers',function(){
    var result = plus(x,y);
    assertEquals(x+y, result);

});
test('minus should substract two numbers',()=>{
    var result = minus(x,y);
    
    assertEquals(x-y, result);
});
test('multiply should multiply two numbers',()=>{

    assertEquals(x*y, multiply(x,y));
})
test('divide should divide first number with second',()=>{
    assertEquals(x/y, divide(x,y));
});