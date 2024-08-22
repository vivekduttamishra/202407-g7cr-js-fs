function greet(name:string, greeting:string='Hello ',times:number=1){

    for(let i=0;i<times;i++)
        console.log(`${greeting}, ${name}!`);
}
greet('Type Script');
greet('Java Script',"I Love ", 10);
greet('g7 Team',"We work",10);

//greet(1);