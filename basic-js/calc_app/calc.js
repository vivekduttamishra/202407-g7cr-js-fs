
function infixFormatter(value1, operator, value2, result){
    return `${value1} ${operator} ${value2} = ${result}`;
}


class Calculator{
    constructor(presenter,formatter){
        this.operators={};
        this.addDefaultOperators();

        this.presenter=presenter || console.log;
        this.formatter=formatter || infixFormatter;
    }

    addDefaultOperators(){
        this.addOperator((x,y)=>x+y, "plus");
        this.addOperator((x,y)=>x-y, "minus");
        this.addOperator((x,y)=>x*y, "multiply");
        this.addOperator((x,y)=>x/y, "divide");

    }


    //socket for future extension.
    addOperator(operator,...names){
        if(operator.name)
            this.operators[operator.name]=operator;
        
        for(let name of names){
            this.operators[name]=operator;
        }
    }

    setPresenter(presenter){
        this.presenter=presenter;
    }

    setFormatter(formatter){
        this.formatter=formatter;
    };


    execute(value1,operatorName, value2){
        if(this.operators[operatorName]){
            //Step #1 Find operator
            var operator=this.operators[operatorName];

            //Step #2 Do Calculation
            var result=operator(value1,value2);

            //Step #3 Format the output
            //var output=`${value1} ${operatorName} ${value2} = ${result}`;
            var output= this.formatter(value1,operatorName,value2,result);
            //Step #4 Present the result
            // hard coded dependency on console.
            //console.log(output);

            //dependency inversion... not knowing exact dependency.
            //I need to present but not sure where/how.
            this.presenter(output); 


        }else{
            //Present the Error Message
            //console.log(`Invalid operator: ${operatorName}`);
            this.presenter(`Invalid operator: ${operatorName}`); 
        }
    }
}

try{
    //export elements only for nodejs.
    module.exports.Calculator = Calculator;
    console.log('Welcome to NodeJS');
}catch(e){
    console.log('Welcome to browser based application');
}