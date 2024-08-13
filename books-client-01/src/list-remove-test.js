var {LinkedList} =require('./list');
var {take}=require('./utils');
//it doesn't have any export
//it simply updates the existing List prototyp.
require('./list-extension');




function testRemove(message, param){
    
    var list=new LinkedList();
    for(var i=0;i<100;i++){
        list.append(i);
    }
    
    console.log('testing ',message);
    var removed=list.remove(param);
    console.log('list.toString()',list.toString());
    console.log(`removed : ${removed}`);
    console.log('-------------\n');
}


//testRemove('remove by index 3',3) ; //removes index 5

//testRemove(x=>x%2==0);


var limit=3;
var count=0;

testRemove('remvoing first 3 multiples of 3',x=> {
    if(count===limit)
        return ;
    
    if(x>0 && x%3===0){
        count++;
        return true;
    }else{
        return false;
    }
});


testRemove('remove first 4 multiples of 5 greater than 10', take(4, x=>(x>10 && x%5===0)));


