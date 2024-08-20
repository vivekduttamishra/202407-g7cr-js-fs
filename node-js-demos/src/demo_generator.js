function * task(){
    console.log('Task Started');
    yield 1;
    console.log('Moving to Step 2');
    yield 2;
    console.log('Moving to Step 3');
    yield 3;
    console.log('Task Completed');
}
var x = task();

console.log('x.next()',x.next());

console.log('x.next()',x.next());

console.log('x.next()',x.next()); //meets last yield

console.log('x.next()',x.next()); 


var x = task();
while(true){
    let result = x.next();
    if(result.done)
        break;
    console.log(result.value);
}

for(var value of task())
    console.log(value);
