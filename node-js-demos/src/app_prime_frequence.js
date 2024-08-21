var {findPrimesInteractive} = require('./primes')


var frequency={};

findPrimesInteractive(2,1000, response=>{

    if(response.message==="prime"){
        var key= response.prime%10; //1,2,3,5,7,9
        if(frequency[key])
            frequency[key]++;
        else
            frequency[key]=1;
    }

    if(response.message==="done"){
        console.log(frequency);
    }

});