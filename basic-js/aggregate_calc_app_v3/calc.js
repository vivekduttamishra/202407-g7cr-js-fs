

function Calculator(){
 
    this.values=[];

    this.addValue=function(...values){
        var errors=0;
        for(var value of values){
            
            if(!isNaN(value)){
                this.values.push(value);
            }
            else{
                errors++;
            }
        }
        //default return.
        //return undefined => false
        return errors;
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