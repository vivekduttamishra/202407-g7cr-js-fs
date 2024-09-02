

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



try{
    module.exports={
        Calculator,
        plus,
        minus,
        multiply,
        divide
    }
}catch(err){}