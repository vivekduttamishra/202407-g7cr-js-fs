var {LinkedList} = require('./list');
require('./list-extension');


var list=new LinkedList(2,3,9,11,4,9,2,7,2,4,8,3,9,11,8);

var size=list.size();

list.append(8,8,2,2);

var size2=list.size();

if(size+4===size2){
    console.log('append many worked fine!')
}else{
    console.log(`append failed: size is ${size2}`);
}


var removed=list.remove(4)
console.log('list.remove(4)',removed);
if(list.size()===size-1){
    console.log('remove worked fine!')
}else{
    console.log(`remove failed: size is ${list.size()}`);
}

var indices=[2,4,-1, 20,3,4];

for(var index of indices) {
    console.log(index, list.get(index));
}



