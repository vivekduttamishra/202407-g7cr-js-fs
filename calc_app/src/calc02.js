

function plus(a, b) {return a + b;}
function minus(a, b) {return a - b;}

function multiply(a, b) {return a * b;}

function divide(a, b) { return a / b;}



function Calculator() {

    this.execute = function (value1, opr, value2) {

        var result = opr(value1,value2);

        
        var output=`${value1} ${opr.name} ${value2} = ${result}`;
       

        console.log(output);
    }
};

var calc = new Calculator();

calc.execute(10, plus, 5);
calc.execute(10, minus, 5);
calc.execute(10, multiply, 5);

//extending with new feature.
var mod= (a,b)=> a%b;
calc.execute(10, mod, 5);

calc.execute(10, "+", 20);