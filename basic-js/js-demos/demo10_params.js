var add=(...numbers)=>{
    
    var result=0;
    for(var number of numbers)
        result+=number;
    
    return result;
}




console.log('add(10,20)',add(10,20));

console.log('add(1,2,3,4,5,6,7)',add(1,2,3,4,5,6,7)); 

console.log('add(10)',add(10));

console.log('add()',add()); 

