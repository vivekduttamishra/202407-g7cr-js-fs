const delay = (time)=>new Promise(resolve=>setTimeout(resolve, time))


const doSomething=async(taskId, time)=>{
    await delay(time);
    if(taskId<0){
        console.log('error',{taskId, time});
        throw new Error({message:'invalid task id',taskId,time});
    }

    console.log('resolved:',{taskId,time});
    return {taskId,time};
}

const promises=[
    doSomething(1, 9000),
    doSomething(2, 1500),
    doSomething(3, 1800),
    doSomething(-1,100),
    doSomething(4, 7500)

]

Promise
    .allSettled(promises)
    .then(data=>console.log("settled",data))
    .catch(error=>console.log('settled error',error));

    console.log('waiting for the promises to be resolved');