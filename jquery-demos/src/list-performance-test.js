var {LinkedList} =require('./list')


function createList(count){
    var list = new LinkedList();

    for(var i=1; i<=count; i++){
        list.append(i);
    }

    return list;
}

function sumList(list){
    var sum=0;
    for(var i=0; i<list.size(); i++){
        sum+=list.get(i);
    }

    return sum;
}

function sumList2(list){
    var sum=0;
    list.forEach(v=> {sum+=v;});

    return sum;
}


(function test(max){
    
    var start=performance.now();
    var list = createList(max);
    var end=performance.now();
    console.log(`creating a list of ${max} completed is ${end-start} ms`);

    start=performance.now();
    var result= sumList(list);
    end=performance.now();
    console.log('result',result);
    
    console.log(`summing a list of ${list.size()} completed in ${end-start} ms`);
})(100000);
