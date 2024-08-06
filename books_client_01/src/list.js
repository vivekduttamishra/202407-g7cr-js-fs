class Node{
    constructor(value,next=null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {

    constructor(...values) {
        this._first = null;
        this._last = null;
        this._size = 0;
        console.log('constructor', values);

        for (var value of values) {
            this._append(value);
        }



    }

    append(...values) {
        console.log('append', values);

        for (var value of values) {
            this._append(value);
        }
    }

    isEmpty() {
        return this._size === 0;
    }

    _append(value) {
        // var newNode = {
        //     value: value,
        //     next: null
        // };

        var newNode = new Node(value);

        if (this.isEmpty())
            this._first = newNode;
        else
            this._last.next = newNode;


        this._last = newNode;
        this._size++;
    }

    _validateIndex(index) {

        if (typeof index !== 'number')
            throw new TypeError('Index must be a number');

        if (index < 0)
            index += this._size;

        if (index < 0 || index >= this._size)
            throw new RangeError(`Index out of range: ${index}. valid range=(0-${this._size - 1})`);

        return index;
    }

    _locate(index) {
        index = this._validateIndex(index);
        var current = this._first;
        for (var i = 0; i < index; i++)
            current = current.next;

        return current;
    }

    size() {
        return this._size;
    }

    get(index) {
        return this._locate(index).value;
    }

    set(index, value) {
        this._locate(index).value = value;
    }

    insert(index, value) {
        index= this._validateIndex(index);
        
        var newNode=new Node(value);
        
        
        if(index===0){
            newNode.next=this._first;
            this._first=newNode;
        }else{
            var n = this._locate(index - 1);
            newNode.next=n.next;
            n.next=newNode;
        }
        this._size++;
        
    }

    remove(index) {
        this._validateIndex(index);
        var p = this._locate(index - 1);
        console.log('p', p);

        //now remove p.next
        p.next = p.next.next;

        return p.value;

    }

    toString(){
        var str="LinkedList(\t";
        for(var n=this._first; n ;  n = n.next){
            str+=n.value+"\t";
        }

        return str+")";
    }

    forEach(execute){
        var i=0;
        for(var n=this._first; n ;  n = n.next){
            execute(n.value,i);
            i++;
        }
    }

    filter(matcher){
        var result=new LinkedList();

        this.forEach( v=>{
            if(matcher(v)){
                result.append(v);
            }
        });

        return result;
    }

    find(matcher){
        for(var n=this._first;n!=null;n=n.next){
            if(matcher(n.value)){
                return n.value;
            }
        }
    }

    map(mapper){
        var result=new LinkedList();

        this.forEach( v=>{
            result.append(mapper(v));
        });

        return result;
    }


}

try{
    module.exports.LinkedList=LinkedList;
    module.exports.Node=Node;
}catch(e){

}