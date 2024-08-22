
class Node<T>{
    constructor(public value:T, public next:Node<T>|null=null){

    }
}

export class LinkedList<T>{

    private first:Node<T>|null=null;
    private _size=0;
    constructor( ...values:T[]){
        
    }

    get size():number{
        return this._size;
    }

}