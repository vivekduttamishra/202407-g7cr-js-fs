var {LinkedList}= require('./list');

var list=new LinkedList();

console.log('list',list); //object as JSON

console.log(`list : ${list}`); //invokes list.toString();

var testNumbers=[2,3,9,2,6];

for(var number of testNumbers)
    list.append(number);


console.log('list',list);

console.log(`list : ${list}`); //invokes list.toString();

console.log('list.toString()',list.toString());

console.log('list.length()',list.length());


for(var i=0; i<list.length(); i++)
    console.log(`list.get(${i})`,list.get(i));

//console.log(list.get(100));

for(var i=0;i<list.length();i++){
    list.set(i, list.get(i)*10);
}

console.log('list.toString()',list.toString());

list.remove(4); //last item 60
list.remove(2); //90
list.remove(0); //20

console.log('list.toString()',list.toString());

list.insert(0,100);

list.insert(2,50);
list.insert(2,80);
list.insert(2,90);

console.log('list.toString()',list.toString());



