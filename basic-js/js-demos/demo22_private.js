
function Employee(id, name){

    //public property.
    // this.id=id;
    // this.name=name;


    this.toString=function(){
        return "Employee[id=" + id + ", name=" + name + "]";
    }

    this.work=function(){
        console.log(name + " is working as an employee");
    }

    this.setName=function(newName){
        name=newName; //this changes the private property
    }

    this.setNewVariable=function(newVariable, newValue){
        newVariable=newValue;
    }

    this.getNewVariable=function(newVariable){
        return newVariable;
    }
}

var employee= new Employee(1,'Sanjay');
employee.work();
employee.name="Prabhat"; //this adds a public property
employee.work();         //but work doesn't use public property
console.log('employee.name',employee.name);

employee.setName("Sanjay Mall");
employee.work();

employee.setNewVariable("email","sanjay@gmail.com");

