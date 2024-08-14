class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;

    }
}

 class LinkedList {

    constructor(...values) {
        this._first = null;
        this._last = null;
        this._size = 0;
        this._currentIndex = undefined;
        this._current = null; //nothing located yet.


        // console.log('constructor', values);

        this.append(...values);
    }

    append(...values) {
        // console.log('append', values);

        for (var value of values) {
            this._append(value);
        }

        return this;
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
            throw new TypeError(`Index must be a number: "${index}"`);

        if (index < 0)
            index += this._size;

        if (index < 0 || index >= this._size)
            throw new RangeError(`Index out of range: ${index}. valid range=(0-${this._size - 1})`);

        return index;
    }

    _locate(index) {
        index = this._validateIndex(index);

        //default case. start from begining
        var current = this._first;
        var startIndex = 0;
        var steps = index;

        if (this._current && this._currentIndex < index) {
            startIndex = this._currentIndex;
            current = this._current;
            steps = index - this._currentIndex;

        }

        //console.log(`locating from start=${startIndex}\tsteps=${steps}`);

        for (var i = 0; i < steps; i++) {
            
            current = current.next;
        }


        this._current = current;
        this._currentIndex = index;
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
        return this;
    }

    insert(index, value) {
        index = this._validateIndex(index);

        var newNode = new Node(value);


        if (index === 0) {
            newNode.next = this._first;
            this._first = newNode;
        } else {
            var n = this._locate(index - 1);
            newNode.next = n.next;
            n.next = newNode;
        }
        this._size++;
        return this;

    }

    remove(index) {

        if(index===0 && this._size>0){
            var d= this._first.value;
            this.first=this._first.next;
            this._size--;
            return d;
        }

        //for all other nodes
        this._validateIndex(index);
        var p = this._locate(index - 1);
       
        var delValue=p.next.value;
        p.next = p.next.next;
        this._size--;
        return delValue;

    }

    toString() {
        var str = "LinkedList(\t";
        for (var n = this._first; n; n = n.next) {
            str += n.value + "\t";
        }

        return str + ")";
    }

    forEach(execute) {
        var i = 0;
        for (var n = this._first; n; n = n.next) {
            var result = execute(n.value, i);
            if (result !== undefined)
                return result;
            i++;

        }
    }

    filter(matcher) {
        var result = new LinkedList();

      this.forEach(v => {
            var _matched=matcher(v);
            if(_matched===undefined)
                return "exit filter" ; //any value breaks.
            if (_matched) {
                result.append(v);
            }
        });

        return result;
    }

    find(matcher) {
        for (var n = this._first; n != null; n = n.next) {
            if (matcher(n.value)) {
                return n.value;
            }
        }
    }

    map(mapper) {
        var result = new LinkedList();

        this.forEach(v => {
            result.append(mapper(v));
        });

        return result;
    }


}

module.exports={
    LinkedList,
    Node
}
