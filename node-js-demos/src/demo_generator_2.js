function * task(){

    console.log('Task started');

    var response = yield(1); //I am passing 1
    console.log('Message1 :'+ response);

    response = yield(2); //I am passing 2
    console.log('Message2', response);

    response = yield(3); //I am passing 2
    console.log('Message3', response);
}

var gen = task();

console.log('gen.next()',gen.next("first")); //we get 1. we pass nothing.


console.log('gen.next(second)',gen.next("second")); //we get 2. we pass first.

console.log('gen.next(third)',gen.next("third")); //we