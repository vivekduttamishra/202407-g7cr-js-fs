
//To read the file using events and display them on the screen.
const fs= require('fs');

const sourceFile='sample.txt';

var source = fs.createReadStream(sourceFile,{encoding:'utf8'});

source.pipe(process.stdout);