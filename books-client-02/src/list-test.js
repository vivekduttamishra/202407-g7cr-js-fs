var {LinkedList} =require( './list');
var {take}=require('./utils');

var list=new LinkedList(2,3,9,4, 8,7,6, 5, 4, 3, 2, 8);

var result= list.filter( take(2, n=>n%2!==0));

result.forEach(v=>console.log(v));

