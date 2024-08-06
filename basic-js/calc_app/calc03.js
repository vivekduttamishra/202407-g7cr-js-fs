

function plus(a, b) { return a + b; }
function minus(a, b) { return a - b; }

function multiply(a, b) { return a * b; }

function divide(a, b) { return a / b; }



function Calculator() {

    operators = {
        plus: plus, //Es5 syntax
        minus     //ES2015 syntax
    }

    this.execute = function (value1, oprName, value2) {

        if (operators[oprName]) { //if this key is present
            var opr = operators[oprName]; //take the function.
            var result = opr(value1, value2);
            var output = `${value1} ${oprName} ${value2} = ${result}`;
            console.log(output);
        } else {
            console.log(`Invalid operation ${opr}`);
        }  

    }

    this.addOperator = function (operator, ...names) {

        if (names.length) {
            for (var name of names) {
                operators[name] = operator;
            }
        } else {
            operators[operator.name] = operator;
        }

    }
};



function testCalculator(calc, message) {
    console.log(message);
    calc.execute(10, "plus", 5);
    calc.execute(10, "minus", 5);
    calc.execute(10, "multiply", 5);
    calc.execute(10, "divide", 4);
    calc.execute(10, "mod", 4);
    calc.execute(10, "+",2);
    calc.execute(10, "%", 4);
    console.log('----------\n\n')
}

var calc = new Calculator();

testCalculator(calc,"Original Functionality Set");


//extending the functionality

calc.addOperator(multiply); //take the method names
calc.addOperator(divide); //take the method name

testCalculator(calc,"Multiply and Divide Added");

calc.addOperator(plus,"add","plus","+","sum");

calc.addOperator((x,y)=>x%y, "mod","%");

testCalculator(calc,"Custom Operators Added");
