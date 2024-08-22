
/*
    Here "X" represents any type 
    which is not know yet
    It is not "any" 
    It is somethign specific but which we dont' know yet
*/
namespace collections{
    
    class Node<X>{    
    
        public value:X;
        public next:Node<X>|null=null;

        constructor(value:X){
            this.value=value;            
        }
    }

    //to create an object
    var node = new Node<number>(20);
    node.value=50; //OK
    node.value='Hello'; //ERROR
}