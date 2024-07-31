class Person{
    constructor(name, age){
        this.name=name;
        this.age=age;
    }

    eat(food){
        console.log(`${this.name} is eating ${food}`);
    }
    
    move(from,to){
        console.log(`${this.name} is moving from ${from} to ${to}`);
    }

    toString(){
        return `Person Name=${this.name}  Age=${this.age}`;
    }
}

class Employee extends Person{
    constructor(name, age, id, salary){
        super(name, age);
        this.id=id;
        this.salary=salary;
    }

    //overwrite the current beha
    toString(){
        var s= super.toString(); //reuse
        s=s.replace('Person','Employee');
        return `${s}  ID=${this.id}  Salary=${this.salary}`;
    }

    work(){
        console.log(`${this.name} is working`);
    }
}

e=new Employee('Sanjay',50,1,50000);

console.log(`Employee is ${e}`); //uses toString()
e.work();