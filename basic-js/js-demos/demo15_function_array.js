
function plus(x,y){return x+y;}

const minus=function(x,y){return x-y;}

const multiply = (x,y)=> x*y;

var operators=[
    plus,
    minus,
    multiply,
    (x,y)=> x/y,
];

// Now we can loop over those operators and use them.
var x=50;
var y=20;

for(var i=0;i<operators.length;i++){
    var result=operators[i](x,y);
    console.log(`${x} ${operators[i].name} ${y} = ${result}`);
}
