var child = require('child_process');

child.exec('dir /b',(error,stdout,stderr)=>{
    if(error)
        console.log('Error:',error);
    else{
        //console.log(stdout);
        files=stdout.split('\r\n');
        console.log('files',files);
        
    }
});