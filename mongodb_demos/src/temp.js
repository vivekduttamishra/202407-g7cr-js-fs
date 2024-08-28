function isPrime(x) {

    console.log('finding prime for ', x);

    if (x < 2)
        return false;

    var factor = 0;
    for (var i = 1; i <= x; i++) {
        if (x % i === 0)
            factor++;
    }

    return factor === 2;
}

var x = 31;
var y = 61;

var r = isPrime(x) || isPrime(y) //evaluate second part only if first is false/undefined/null

console.log(r);

var r = isPrime(40) && isPrime(43); //evaluate second part only first is successful


console.log('r', r);

isPrime(31) && console.log(31, "is prime");
isPrime(51) && console.log(51, "is prime");


//when to use ternary operator

var r = isPrime(31) ? "true" : "false";

//when not to use ternary operator



function findBook(id) {

    return id > 0 ? { title: `Book #${id}`, id } : null;
}


function printBook(id) {

    // var result = findBook(id) ?? {error:`invalid id ${id}`}
    //var result = findBook(id) || {error:`invalid id ${id}`}
    //console.log(result);

    (b = findBook(id)) && console.log(b);
}

printBook(31);
printBook(5);
printBook(-1);
printBook();