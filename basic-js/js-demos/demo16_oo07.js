

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



function createEmployee(name,id, salary){
    //var this= new Object();

    this.name=name;
    this.id=id;
    this.salary=salary;

    this.work=function(){
        console.log(`${this.name} is working as an employee`);
    }

    //return this;
}


//Step #1
var e = new Object();

//Step #2: How do we initialize the employee
e.set=createEmployee;

//now e has single behavior called set.
console.log('e',e);

//now we can initialize
e.set('Sanjay',4,50000);


// now set has added more behaviors to e
console.log('e',e);

delete e.set; //remove set property
console.log('e',e);

//simplified constructor approach.
var e2 = new createEmployee('Shivanshi',5,50000);
console.log('e2',e2);





