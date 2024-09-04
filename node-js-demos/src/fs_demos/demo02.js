var fs = require('fs');
const file="src/demo_all_streams.js"
var stream=require('stream')


class Counter extends stream.Readable{
    constructor(min,max,options){
        super(options);
        this.min=min;
        this.max=max;
    }
    _read(){
        if(this.min<this.max){
            this.push(Buffer.from(this.min.toString())) //emit('data')
            
            //this.emit('data', Buffer.from(` ${this.min} `));
            this.min++;
        } else{
            this.push(null); //emit ('end')
            //this.emit('end',null);
        }
    
    }
}

class JsonBuilder extends stream.Transform{
    constructor(options){
        super(options);
        this.index=0;
    }
    _transform(chunk, encoding, callback){

        var output = {index:this.index,data: chunk.toString()};
        this.index++;


        this.push(Buffer.from(JSON.stringify(output)));
        //this.emit('data', Buffer.from(chunk.toString().toUpperCase()));
        callback(); //emit('drain')
    }
}


class StringWriter extends stream.Writable{
    constructor(options){
        super(options);
        this.data="";
    }
    _write(chunk, encoding, callback){
        this.data+=chunk.toString();
        callback(); //emit('drain')
    }
} 

class Collector extends stream.Writable{
    constructor(container,options){
        super(options);
        this.container=container;
    }

    _write(chunk, encoding, callback){
    
        this.container.push(JSON.parse(chunk.toString()));
        callback();
    
    }
}


var counter = new Counter(1,10);

//  counter.on('data', data=>console.log(data.toString()));
//  counter.on('end',()=>console.log('done'));

//counter.pipe(process.stdout);


//var writer = new StringWriter();

var result=[];


counter                         //0 1 2 3 4 
    .pipe(new JsonBuilder())   // "{index:0, value:0}" "{index:1,value:1}"
    .on('data', data=>console.log(JSON.parse(data))); 



