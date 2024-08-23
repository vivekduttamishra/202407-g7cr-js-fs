
let  a : number = 29;  //x has type number and value 29

a=50 ; //OK

//a='Hi' ; //ERROR



let b = 20;  //b has a type number (detected from asssigned value 20)

b=50; //OK

//b='Hi' ; //ERROR


let c: string;  //it can hold only string. currently unassigned.
//can's use c before initialization
//console.log('c',c);

c='Hi' ; //Ok
console.log('c',c); //Hi 

//c=50; //ERROR

let d:any = 20; // it can hold any value. currently holding 20

d=50; //OK
console.log('d',d);

d='Hi' //OK
console.log('d',d);




var e; //declared as any. with value undefined
console.log('e',e);
  
e=20; //OK
console.log('e',e);

e='Hi'; //OK
console.log('e',e);





function sum(x:number,y:number):number{

    return  x+y ;

}


//we can specify the type of array also


let numbers: number[] = [1,2,3,4];  //an empty array of numbers

numbers.push(20); //OK
numbers.push(2.5); //OK
//numbers.push('HI'); //ERROR


let id: number|string|null = 20; //id can either be a number or a string

id='Hi' //OK

id=20; //OK

//id=false; //ERROR

id=null; //OK


let state: "SUSPENDED"|"READY"|"RUNNING"|"STOPPED"="READY";

console.log('state',state);

state="SUSPENDED" //OK

console.log('state',state);






//state="NOT WORKING" //ERROR


