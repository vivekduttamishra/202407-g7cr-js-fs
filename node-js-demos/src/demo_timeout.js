setTimeout(()=>{
    console.log('I am running after 5 seconds');
},5000);

setTimeout(()=>{
    console.log('I am the shorter job running after 2 seconds');
},2000);


//this is asynchronous and doesn't have to wait for other two jobs
//the previous two calls of setTimeout are synchronous
//but the callback they will call is in future and the callback is asynchronous
console.log('I am running immediately');