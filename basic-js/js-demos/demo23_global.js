function f1(){

    console.log('Hello World');
    
    var console='Hello World'; //a local console reference is now overwritten.
    
    //now console.doesn't refere to global variable
    console.log('Hello World'); //doesn't work here
}
try{

    f1(); //console is overwritten inside f1
}catch(e){
    console.log(e.message); //but it is present in global
}

console.log('End of program');

