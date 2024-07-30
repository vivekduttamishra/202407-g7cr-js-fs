var add=(...numbers)=>{
    
    var result=0;
    for(var number of numbers)
        result+=number;
    
    return result;
}

var average=(...numbers)=>{
    return add(...numbers)/numbers.length;
}

console.log('average(1,2,3,4)',average(1,2,3,4));

console.log('average(1,2,3,4,5)',average(1,2,3,4,5));
