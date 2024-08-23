
//To read the file using events and display them on the screen.
const fs= require('fs');

const sourceFile='sample.txt';
const targetFile='sample_target.txt';

var source = fs.createReadStream(sourceFile,{encoding:'utf8'});
var target = fs.createWriteStream(targetFile,{encoding:'utf8'});

//Now can handle the data and tranfer it using stream mechanism.

var buffer=""; //data to be temporarily stored in memory.

var bufferId=0;

var firstWrite=true;

var reading=true;

source.on('data', chunk=>{
    //we got new data.
    //but we don't know if target is ready to consume.
    //we will keep it in a buffer memory. util target is ready to consume.
    reading=true;
    if(firstWrite) {
        //nothing is written. we can write directly.
        firstWrite=false;
        target.write(chunk, (error, done)=>{
            if(error) {
                console.log('target error:', error);
                return;
            }          
        });
    }
    else{
        //first write is initiated but NOT sure if completed.
               
        buffer+=chunk.toString();
        bufferId++;
        process.stdout.write(`[${bufferId}] `);
    }
       
});

source.on('end', ()=>{
    //no more data left. we can inform this to target.
    reading=false;
});

source.on('close',()=>{
    console.log('\nsource stream closed');
});

target.on('open',()=>{
    console.log('\ntarget stream opened');
});

target.on('error', error=>{
    console.log('target error:', error);
});

target.on('drain',()=>{
    //target is ready to consume from buffer.
    if(!reading){
        source.close();
        target.close();
        return;
    }
   
    process.stdout.write(`(${bufferId}) `)
    target.write(buffer, (error,done)=>{
        buffer=''; //clear the buffer for next call.
    });
});

target.on('close',()=> console.log('\ntarget stream closed'));
