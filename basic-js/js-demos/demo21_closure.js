
function outer( oparam){
    var olocal= oparam*2;

    function inner(iparam){
        var ilocal= iparam*oparam;
        console.log(`oparam=${oparam}\tolocal=${olocal}\tiparam=${iparam}\tilocal=${ilocal}`);
    }

    return inner;
}

var x=outer(10); //x is inner function with closure => {oparam=10, olocal=20}

var y=outer(8);  //y is inner function with closure => {oparam=8, olocal=16}


x(5);

y(5);