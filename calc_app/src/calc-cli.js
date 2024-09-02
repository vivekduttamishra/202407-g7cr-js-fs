const CLI = require('./cli')
const {Calculator} = require('./calc');

const calc=new Calculator();

//calc.presenter= output=>output;

const cli = new CLI();



function calculatorController( ){
    
    return (x,operator,y)=>{
        x=parseFloat(x);
        y=parseFloat(y);   

        calc.execute(x, operator, y);
    }
}

cli.addCommand(calculatorController(), "execute");


// cli.addCommand(calculatorController(), "plus", "+","add");
// cli.addCommand(calculatorController(), "minus", "-");
// cli.addCommand(calculatorController(), "multiply", "*");
// cli.addCommand(calculatorController(), "divide", "/");

cli.run();