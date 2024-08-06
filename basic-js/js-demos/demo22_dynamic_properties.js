
function Person(name){

    //this.name=name;

    this.getName=function(){
        return name;
    }

    this.setName=function(newName){
        if(newName && typeof(newName)=="string"){
            name=newName;
        }
    }

    this.toString=function(){
        return `Person Name=${name}`;
    }

    var properties={}; //dictionary;

    this.set=function(key,value){
        properties[key]=value;
    }

    this.get=function(key){
        return properties[key];
    }

}

var p=new Person('Sanjay');

console.log('p.name',p.name); //we don't get it

p.setName('John');

console.log('p.getName()',p.getName()); //changed

p.setName(420);

console.log('p.getName()',p.getName()); //remains unchanged.
console.log('p.properties',p.properties);


p.set('email','vivek@conceptarchitect.in');
p.set('phone','90360 84835');

console.log('p.get("email")',p.get("email"));
console.log('p.get("phone")',p.get("phone"));

console.log('p.get("youtube")',p.get("youtube"));

p.set("youtube","@vivek.epic.echoes");

console.log('p.get("youtube")',p.get("youtube"));


console.log('p.youtube',p.youtube);
