//Standard Approach for Function 
//Step 1: Create a Function
function greet(){
    console.log('Hello World!');
}

//The code will not run until we call this function

//Step 2: call the function.
greet();


//IIFE

(
    function greeter(){
    console.log('Hello from IIFE!');
    }
)();

//greeter(); //can't access


(
    function (name){
        console.log(`Hello ${name}!`);        
    }

)('IIFE');

