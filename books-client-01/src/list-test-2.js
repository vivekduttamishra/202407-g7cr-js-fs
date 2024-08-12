var {LinkedList} =require('./list');


var list = new LinkedList();

//var l = list.append(1,2,3,4); //what is l =>  l===list

//why should append return same list which user already has.
// now l===list. Two reference to the same thing.


var size=list
            .append(1,2,3,4,5)   //list
            .append(6,7,8,9,10)  //list
            .insert(5,100)       //list
            .set(8,200)
            .size();            //error

console.log('list',list.toString());

console.log('size',size);


            