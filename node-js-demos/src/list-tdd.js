

class List{
    constructor(){
        this._size=0;
        this._last=null;
    }

    isEmpty(){
        return this._size===0;
    }
    size(){
        return this._size;
    }

    toString(){
        return "LinkedList "+this._last;
    }

    append(item){
        this._size++;
        this._last=item;
    }

    get(index){
        if(index<-1 || index>=this._size)
            throw new Error(`Invalid Index: ${index}`);
        return this._last;
    }
}

module.exports={
    List
}