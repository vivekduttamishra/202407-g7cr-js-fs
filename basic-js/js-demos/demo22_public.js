
function Employee(id, name){

    //public property.
    this.id=id;
    this.name=name;

    this.toString=function(){
        return "Employee[id=" + this.id + ", name=" + this.name + "]";
    }

    this.work=function(){
        console.log(this.name + " is working as an employee");
    }
}

var employee= new Employee(1,'Sanjay');
employee.work();
employee.name="Prabhat"; //changed the name
employee.work();
