ar inputs=["principal","rate","period","done"];
var index=0;


process.stdin.on('data',function(data){
    event.emit(inputs[index], data);
    index++;
})