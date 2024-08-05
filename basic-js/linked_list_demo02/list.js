class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(...items) {
        this._first = null; //I have an empty list
        this._size = 0;
        this._last=null;
        this.append(...items);
    }

    append(...items){
        for(var item of items){
            this._append(item);
        }
    }

    _append(item) {
        //Step #1. we got a value; not a node.
        var newNode = new Node(item); //next is null.

        //Situation #1: Appending as the first item of an empty list.
        if (this._first === null) {
            this._first = newNode;            
        }
        else {
            //Situation #2: Adding at the end of a non-empty list.           
            this._last.next = newNode;
        }
        
        this._last=newNode;
        this._size++;


    }

    toString() {
        var str = "LinkedList(\t";
        for (var n = this._first; n; n = n.next) {
            str += `${n.data}\t`
        }
        return str + ")";
    }

    insert(index, item) {

        index = this._validateIndex(index);
        var newNode = new Node(item);

        if (index == 0 ) {
            newNode.next = this._first;
            this._first = newNode;

        }
        else {
            var n =this._locate(index-1);
            newNode.next = n.next;
            n.next = newNode;
        }

        this._size++;
    }

    length() {
       return this._size;
    }

    remove(index) {
        index = this._validateIndex(index);

        //Case #1 removing item 0
        if (index == 0 ) {
            var value = this._first.data;
            this._first = this._first.next;
            return value;
        }
        
        //Case 2 removing non-0 item
        //reach the n-1 position
        var n= this._locate(index-1);
        var value = n.next.data; //save the data to be removed
        n.next = n.next.next; //skip the node to be removed
        return value;

    }

    get(index) {
        
        return this._locate(index).data;

    }

    set(index, item) {

        var n = this._locate(index); //reach to the right node
        n.data = item;

    }

    _locate(index) {
        index=this._validateIndex(index);

        var n = this._first;
        for (var i = 0; i < index; i++)
            n = n.next; //reach to the right node
        return n;
    }

    _validateIndex(index) {
        if(typeof(index) !== "number")
            throw new Error("Invalid Index: Not a number");

        if(index<0)
            index= this.length()+index;

        if (index<0 || index >= this.length())
            throw new Error(`Invalid Index: ${index}. Valid indiced: [0-${this.length() - 1}]`);

        return index;

    }

    indexOf(item){
        var i=0;
        for(var n=this._first; n; n = n.next){
            if(n.data === item)
                return i;
            i++;
        }

        return -1;
        
    }

    find(isMatch){
        var result=new LinkedList();
    
        for(var i=0;i<this.length();i++){
            var item=this.get(i);
            if(isMatch(item)){
                result.append(item);
            }
        
        }
    
        return result;
    }


}



try {



    module.exports.Node = Node;
    module.exports.LinkedList = LinkedList;



} catch (e) {

}


