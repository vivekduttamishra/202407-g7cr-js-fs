

function Calculator() {

    this.execute = function (value1, opr, value2) {
        var result = 0;

        if (opr === '+') {
            result = value1 + value2;
            //console.log(`${value1} ${opr} ${value2} = ${result}`); 
        }
        else if (opr === '-') {
            result = value1 - value2;
            //console.log(`${value1} ${opr} ${value2} = ${result}`);
        } else if (opr === '*') {
            result = value1 * value2;
        }
        if (opr === '/') {
            result = value1 / value2;
        }
        else
            console.log(`Invalid opearation: ${opr}`);

        console.log(`${value1} ${opr} ${value2} = ${result}`);
    }
};

var calc = new Calculator();

calc.execute(10, '+', 5);
calc.execute(10, '-', 5);
calc.execute(10, '!', 5);