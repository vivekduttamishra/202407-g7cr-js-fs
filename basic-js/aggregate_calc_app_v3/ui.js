class Element{
    constructor(elementId, innerElement="p"){
        //this.elementId = elementId;
        //this.innerElement = innerElement;
        this.element=document.getElementById(elementId);
        this.start="<"+innerElement+">"; //<p>
        this.end="</"+innerElement+">"; //</p>
    }

    append(...items){
        
        
        for(var item of items)
            this.element.innerHTML+= (this.start+item+this.end);
    }

    appendWithId(id,item){
        var start = this.start.replace(">", ` id="${id}" >`)
        //console.log(start+item+this.end);
        this.element.innerHTML+= start+item+this.end;
    }

    clear(){
        this.element.innerHTML='';
    }
}