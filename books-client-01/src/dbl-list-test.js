var {DblList} =require('./dbl-list');


var list = new DblList();

for(var i=0;i<100;i++)
    list.append(i);


console.log('list.get(70)',list.get(70));

console.log('list.get(12)',list.get(12)); //should start from 0


console.log('list.get(50)',list.get(50)); //start from 12

console.log('list.get(80)',list.get(80)); //start from 100


console.log('list.get(99)',list.get(99)); //start from 99;


console.log('list.get(60)',list.get(60));


console.log('list.get(0)',list.get(0));

console.log('list.get(60)',list.get(60));





