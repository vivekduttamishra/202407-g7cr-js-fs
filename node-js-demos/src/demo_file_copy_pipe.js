
//To read the file using events and display them on the screen.
const fs= require('fs');

const sourceFile='sample.txt';
const targetFile='sample_target_piped.txt';

var source = fs.createReadStream(sourceFile,{encoding:'utf8'});
var target = fs.createWriteStream(targetFile,{encoding:'utf8'});

source.pipe(target);