function plus(x,y){return x+y;}

async function minus(x,y){return x-y;}


console.log('typeof plus(3,4)',plus(3,4).__proto__.constructor.name);

console.log('typeof minus(3,4)',minus(3,4).__proto__.constructor.name);


console.log('plus(3,4)',plus(3,4));

console.log('minus(3,4)',minus(3,4));

minus(3,4).then(console.log);




