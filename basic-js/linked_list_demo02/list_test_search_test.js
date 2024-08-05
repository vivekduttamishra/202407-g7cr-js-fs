var {LinkedList}= require('./list');

var list=new LinkedList(2,9,11,8,13,4,5,9,7,18,23,26);

console.log('list:',list.toString());


// find all prime number in the list

function isPrime(number){
    if(number<2)
        return false;

    for(var i=2;i<number;i++)
        if(number%i==0)
            return false;
        
    return true;
}

function findPrimeNumbers(list){
    var result=new LinkedList();

    for(var i=0;i<list.length();i++){
    
        if(isPrime(list.get(i))){
            result.append(list.get(i));
        }
    
    }

    return result;
}

function find(list,isMatch){
    var result=new LinkedList();

    for(var i=0;i<list.length();i++){
        var item=list.get(i);
        if(isMatch(item)){
            result.append(item);
        }
    
    }

    return result;
}

var primes = find(list,isPrime);
