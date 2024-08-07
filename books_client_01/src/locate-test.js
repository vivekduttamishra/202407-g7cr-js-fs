var {LinkedList} =require('./list');

var list= new LinkedList();

for(var i=0;i<1000;i++){
    list.append(i);
}

function fetchIndex(index){
    console.log('Fetching index',index);
    console.log(`currentIndex: ${list._currentIndex}\tcurrent:${list._current?.value}`);

    var value = list.get(index);

    console.log('value',value);
    console.log(`currentIndex: ${list._currentIndex}\tcurrent:${list._current?.value}`);
    console.log('---------------\n');
    
}

fetchIndex(250);

fetchIndex(280);
