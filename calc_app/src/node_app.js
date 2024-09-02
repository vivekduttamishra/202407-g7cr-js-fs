var Calculator=require('./calc').Calculator;

function nodeApp(){
    var calc=new Calculator();
    calc.execute(10,"plus",5);
    calc.execute(10,"minus",5);

    calc.setFormatter((_,opr,__,result)=>`${opr}=>${result}`);
    calc.setPresenter( output=> console.log(`*** ${output} ***`) );

    calc.execute(10,"multiply",5);
    calc.execute(10,"divide",4);
    calc.execute(10,"mod",4);
}

nodeApp();