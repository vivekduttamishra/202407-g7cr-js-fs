

function complexMultiplier(param){

    var promise=new Promise((resolve,reject)=>{

        //don't make this funciton long running.

        //run long running task here
        setTimeout(()=>{
            //actual async task
            if(typeof param=='number')
                resolve(param*2);
            else
                reject(new Error(`Invalid input ${param}`));
        }, 1000);

    });

    return promise;

    
}

function testPromise(value){
    complexMultiplier(value)
       .then(result=>console.log(`Result: ${result}`))
       .catch(error=>console.error(`Error: ${error.message}`));

    console.log('complex multiplier testing',value);
}



testPromise(5);
testPromise('hello');
testPromise(10);

console.log('complex multipler tests scheduled');


