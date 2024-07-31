

function createPerson(name, age) {
    var p = new Object();
    p.name = name;
    p.age = age;

    p.show = function () {
        console.log(`Person Name=${this.name} Age=${this.age} `);
    };
    p.eat = function (food) {
        console.log(`${this.name} is eating ${food}`);
    }

    p.move = function (to, from) {
        console.log(`${this.name} is moving from ${from} to ${to}`);
    }

    return p;
}

//now we can create the object

var sanjay= createPerson('Sanjay',50);
var amit= createPerson('Amit',15);

sanjay.show();
sanjay.eat('breakfast');
sanjay.move('home','office');
console.log('-----------');
amit.show();
amit.eat('breakfast');
amit.move('home','school');






console.log('amit',amit);
console.log('sanjay',sanjay);
console.log('amit.show===sanjay.show',amit.show===sanjay.show);




