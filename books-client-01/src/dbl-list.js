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

        var list=this; //remember which list we are talking about

        var Navigator=function (startingPosition,startingNode){
            
                var steps=  Math.abs(index-startingPosition);                
                var node=startingNode;

                this.getSteps=()=> steps;

                this.getBestNavigator=(otherNavigator)=>{
                    if(steps<=otherNavigator.getSteps()){
                        return this;
                    }
                    else{
                        return otherNavigator;
                    }
                }

                this.navigate= function(){

                    console.log(`Navigating from ${startingPosition} ${index-startingPosition}`);
                    

                    if(steps===0)
                        return node;

                    var forwardDirection= index-startingPosition>0;

                    for(var i=0;i<steps;i++){
                        if(forwardDirection)
                            node=node.next;
                        else
                            node=node.previous;
                    }
                    
                    console.log(`current updated to ${index}`);

                    list._current=node;//this._current=node;
                    list._currentIndex=index;//this._currentIndex=index;
                    return node;
                }
        };

        var startNavigator=new Navigator(0,this._first);
        var currentNavigator=new  Navigator(this._currentIndex===null?0:this._currentIndex, this._current); //if this._current===null, this navigator will not be used
        var endNavigator=new  Navigator(this._size-1, this._last);
        
        // var selectedNavigator = startNavigator.getBestNavigator(currentNavigator);
        // selectedNavigator= selectedNavigator.getBestNavigator(endNavigator);
        // var node= selectedNavigator.navigate();
        
        //Simplified chained code.
        return  startNavigator
                            .getBestNavigator(currentNavigator)
                            .getBestNavigator(endNavigator)
                            .navigate();

       

        
        




    }



}

try{
    module.exports={
        DblList:DblList,
        
    }
}catch(e){

}