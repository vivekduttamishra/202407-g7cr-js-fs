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