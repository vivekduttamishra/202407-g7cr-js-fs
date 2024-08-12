var {LinkedList,Node} =require( './list');

class DblList extends LinkedList{

    constructor(...values){
        super(...values);
    }

    _append(value){
        var newNode = new Node(value);
        newNode.previous=this._last;

        if(this.isEmpty()){
            this._first=newNode;
        } else{
            this._last.next=newNode;
        }
        this._last=newNode;
        this._size++;
    }

    insert(index,value){

        var n = this._locate(index);
        //insert new node before this one.
        var newNode = new Node(value,n);
        newNode.previous=n.previous;

        if(n.previous){
            n.previous.next=newNode;
        } else{
            this._first=newNode;
        }

        n.previous=newNode;
        this._size++;

    }

    remove(index){
        var delNode= this._locate(index);
        var previous= delNode.previous;
        var next= delNode.next;

        if(previous){
            previous.next=next;
        }
        else{
            this._first=next;
        }

        if(next){
            next.previous=previous;
        }
        else{
            this._last=previous;
        }
    }

    _locate(index){
        
        var index= this._validateIndex(index);

        var navigator= (pos,anchor)=>{
            return {
                steps:  Math.abs(index-pos), 
                direction: (index-pos)>=0? 1: -1,
                anchor:anchor,
                next: (n)=> {
                    if(direction){
                        n=n.next;                        
                    }else if(direction<0){
                        n=n.previous;
                    }
                    return n;
                }

            }
        }

        var startNavigator= navigator(0,this._first);
        var currentNavigator= navigator(this._currentIndex===null?0:this._currentIndex, this._current); //if this._current===null, this navigator will not be used
        var endNavivator= navigator(this._size-1, this._last);

        var selectedNavigator=null;
        if(startNavigator.steps<= currentNavigator.steps && startNavigator.steps<= endNavigator.steps){
            selectedNavigator=startNavigator;
        } else if(currentNavigator.steps<= endNavigator.steps && currentNavigator.steps<= endNavigator.steps){
            selectedNavigator=currentNavigator;
        }else{
            selectedNavigator=endNavivator;
        }
       


        




    }



}