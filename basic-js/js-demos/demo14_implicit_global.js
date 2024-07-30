

function outer(omax,imax){
    for( i=0; i<omax; i++){
        console.log("outer:", i);
        inner(imax);
    }
}

function inner(imax){
   for(i=0;i<imax;i++){
        console.log("\tinner:", i);
    }
}

outer(4,2);