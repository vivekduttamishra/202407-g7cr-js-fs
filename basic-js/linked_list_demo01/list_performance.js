var { LinkedList } = require('./list');

function createList(count) {
    var list = new LinkedList();
    for (var i = 1; i <= count; i++)
        list.append(i);

    return list;
}

function sumList(list) {
    var result = 0;
    for (var i = 0; i < list.length(); i++)
        result += list.get(i);

    return result;

}

//find how much time will the below code take
var count = 100000;
//time#1
var start=performance.now();
var list = createList(count);
var end = performance.now();

console.log('Time taken to create list:', end - start); // in milliseconds

//time#2
start=performance.now();
var result = sumList(list);
end = performance.now();
console.log('result',result);
console.log(`Time taken to sum the list : ${end-start}`);

