function add(x,y){
    
    console.log('x',x);
    console.log('y',y);
    console.log('arguments',arguments);
    console.log('--------------\n\n');
    
    return x+y;
}

console.log('add(10,20)',add(10,20));

console.log('add(1,2,3,4,5,6,7)',add(1,2,3,4,5,6,7)); //add(1,2);

console.log('add(10)',add(10)); //add(10,undefined);

console.log('add()',add()); //add(undefined,undefined)

