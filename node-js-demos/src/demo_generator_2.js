function * task(){
    //step 3 starts the execution.
    console.log('Task started');

   
    var response =     //7. we assigned response.
            yield(1); //4. we called yeild.  


    //8. we log the response
    console.log('Message1 :'+ response);

    //9. we yeild again.
    response = yield(2); //I am passing 2
    //12 we received response.
    //13. we log the response
    console.log('Message2', response);
    //14 we return third yeid
    response = yield(3); //I am passing 2
    //now we wait for response that will come on next() call by client. which client never called.
    console.log('Message3', response);
}

//step 1. generator created. but task has not started execution.
var gen = task();

//step 2. we call next()
//step 5. we receive the yielded value.
console.log('gen.next()',gen.next("first call")); // we passed "first call" and we got 1. no one received first call

//step 6. we make the next call
//step 10. we recievd the second yeild.
console.log('gen.next(second)',gen.next("second")); //we get 2.  

//Step 11. we called next('third')
//Step 15. we recievd the third yeild
console.log('gen.next(third)',gen.next("third")); //we

var x= gen.next("Abrakadabra");

console.log('x',x);
