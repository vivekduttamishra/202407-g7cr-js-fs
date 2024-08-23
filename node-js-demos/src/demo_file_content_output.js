
//To read the file using events and display them on the screen.
const fs= require('fs');

const file='sample.txt';

var input = fs.createReadStream(file,{encoding:'utf8'});

var chunCount=0;
var chunkSizes=[];

input.on('data', chunk=>{
    process.stdout.write(chunk.toString());
    chunCount++;
    chunkSizes.push(chunk.length);
});

input.on('end', ()=>{
    console.log('\n\nTotal chunks:', chunCount);
    console.log('chunkSizes',chunkSizes);
    
});

