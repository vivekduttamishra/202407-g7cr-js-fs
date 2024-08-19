

function complexMultiplier(param, callback){
    setTimeout(()=>{
        //actual async task
        if(typeof param=='number')
            callback(null,param*2);
        else
            callback(new Error(`Invalid input ${param}`));
    }, 1000);
}

function printResult(err, result){
    if(err)
        console.error(err.message);
    else
        console.log(result);
}

complexMultiplier(5, printResult);
complexMultiplier("hello", printResult);
complexMultiplier(15, printResult);

console.log('All mulgtiplication job started...');


