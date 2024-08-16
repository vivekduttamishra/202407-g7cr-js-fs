
class Has{

    constructor(){
        
    }
    type(){
        return this.__proto__.constructor.name;
    }

    property(name){
        return this[name];
    }
};


function hasInjector(){
    Object.prototype.type=function(){
            return this.__proto__.constructor.name;
        };
    
    Object.prototype.property=function(name){
            
            return this[name];
    }
    
}

module.exports={
    hasInjector
}