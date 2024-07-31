

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


function Employee(name,id, salary){
    //var this= new Object();

    this.name=name;
    this.id=id;
    this.salary=salary;

    this.getName=function(){
        return this.name;
    }

    //return this;
}

Employee.prototype.work= function(){
    console.log(`${this.name} is working as an employee`);
}

var person= createPerson('Sanjay',50);
console.log('person',person);


var employee = new Employee('Shivanshi',5,50000);
console.log('employee',employee);






