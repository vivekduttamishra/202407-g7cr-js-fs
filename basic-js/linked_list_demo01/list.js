class Node{
    constructor(data,next=null){
        this.data = data;
        this.next = next;
    }   
}

class LinkedList{
    constructor(){
        this.first=null; //I have an empty list
    }
    
    append(item){
        //Step #1. we got a value; not a node.
        var newNode=new Node(item); //next is null.

        //Situation #1: Appending as the first item of an empty list.
        //Append as the first item.
        if(this.first===null){
            this.first=newNode;
            return ;
        }

        //else
        //Situation #2: Adding at the end of a non-empty list.
        //Append as the next of last item.
        var n=this.first;
        while(n.next){ //while it is not the last node.
            n=n.next; //move towards the last
        }

        //now n is the last node
        n.next=newNode;



    }
    
    toString(){
        var str="LinkedList(\t";
        for(var n=this.first; n ;  n=n.next){
            str+=`${n.data}\t`
        }
        return str+")";
    }

    insert(index, item){
        //step#1 is index valid?
        if(index>=this.length())
            throw new Error(`Invalid Index: ${index}. Valid indiced: [0-${this.length()-1}]`);

        //step#2 create new node
        var newNode=new Node(item);

        //step#3.1 insert at the begining.
        if(index==0){
            newNode.next=this.first;
            this.first=newNode;
            return ;
        }

        //step#3.2 insert at other indices
        //locate index-1 node
        var n=this.first;
        for(var i=0;i<index-1;i++)
            n=n.next;

        //insert the new node after n
        newNode.next=n.next;
        n.next=newNode;
        
    }

    length(){
        var i=0;
        for(var n=this.first; n; n=n.next)
            i++;
        return i;
    }

    remove(index){
        //remove item at given index
        if(index>=this.length())
            throw new Error(`Invalid Index: ${index}. Valid indiced: [0-${this.length()-1}]`);

        //Case #1 removing item 0
        if(index==0){
            var value=this.first.data;
            this.first=this.first.next;
            return value;
        }

        //Case 2 removing non-0 item
        //reach the n-1 position
        var n=this.first;
        for(var i=0; i<index-1; i++)
            n=n.next; //reach to the (n-1)th node

        var value=n.next.data; //save the data to be removed
        n.next=n.next.next; //skip the node to be removed
        return value;

    }

    get(index){
        if(index>=this.length())
            throw new Error(`Invalid Index: ${index}. Valid indiced: [0-${this.length()-1}]`);

        var n=this.first;
        for(var i=0;i<index;i++)
            n=n.next; //reach to the right node

        return n.data;

    }

    set(index, item){
        if(index>=this.length())
            throw new Error(`Invalid Index: ${index}. Valid indiced: [0-${this.length()-1}]`);

        var n=this.first;
        for(var i=0;i<index;i++)
            n=n.next; //reach to the right node

        n.data=item;

    }

    
}



try{



    module.exports.Node=Node;
    module.exports.LinkedList=LinkedList;



}catch(e){

}


