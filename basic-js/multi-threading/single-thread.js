const {findPrimesSync} = require('./worker');


let lastId=0;
const executeFindPrimes = (min,max)=>{
    let id=++lastId;
    const result= findPrimesSync(min,max);
    console.log(id,min,max,result.length);
}


executeFindPrimes(2,500000)
executeFindPrimes(2,5000);
executeFindPrimes(2,200000);