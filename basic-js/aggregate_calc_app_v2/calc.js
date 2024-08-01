

function Calculator(){
 
    this.values=[];

    this.addValue=function(value){
        if(!isNaN(value)){
            this.values.push(value);
            return true;
        }
        //default return.
        //return undefined => false
    }

    this.remove=function(index){
        this.values.splice(index, 1);
    }

    this.sum=function(){
        let result=0;
        for(let value of this.values)
            result+=value;
        return result;
    };

    this.average=function(){
        return this.sum()/this.values.length;
    };

    this.max=function(){
        let result=this.values[0];
        for(let value of this.values)
            if(value>result)
                result=value;
        return result;
    }
    this.min=function(){
        let result=this.values[0];
        for(let value of this.values)
            if(value<result)
                result=value;
        return result;
    }

    this.reset=function(){
        this.values=[];
    };
    
}