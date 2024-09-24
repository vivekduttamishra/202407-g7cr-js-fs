const cluster = require('cluster');


console.log('is master', cluster.isMaster)

if(cluster.isMaster){
    console.log('Master process id',process.pid);
    for(let i=0;i<10;i++)
        cluster.fork();
} else{

    //write the logic that each cluster will execute.
    console.log('worker',process.pid);
    process.exit(0);
}