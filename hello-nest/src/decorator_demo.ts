



function plus(x:number,y:number){
    return x+y;
}




const add= autolog(plus);

var result = add(2,3);

console.log(result); // Output: add(2,3) => 5

function autolog( fn:Function ){
    return (...params:any[])=>{

        const result  = fn(...params);
        const paramStr = params.join(',');
        console.log(`${fn.name} (${paramStr}) => ${result}`);
        return result;
    }
}

function logDescriptor(target:any, propertyKey:string, descriptor:PropertyDescriptor){
    console.log('target',target.constructor.name);
    console.log('propertyKey',propertyKey);
    console.log('descriptor', descriptor);

    return descriptor;
    
} 


function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    
    
    

    descriptor.value = function (...params: any[]) {
        const result = originalMethod.call(this, ...params); //this.originalMethod(params);
        const paramStr = params.join(',');
        console.log(`${propertyKey} (${paramStr}) => ${result}`);
        return result;
    };

    return descriptor;
}


let _history:any={};

const maintainHistory = function(target:any, propertyKey:string, descriptor:PropertyDescriptor){

    let originalMethod = descriptor.value;

    descriptor.value=function(...params:any[]){
        const result = originalMethod.call(this,...params);
        if(!_history[propertyKey])
            _history[propertyKey]=[];

        _history[propertyKey].push({params,result});
        
        return result;
    }

    descriptor.value.history=[];

    return descriptor;


}




class Calculator {
    
    

    @log    
    minus(x: number, y: number) {
        return x - y;
    }

    @maintainHistory
    multiply(x:number,y:number){
        return x*y;
    }
    
    @maintainHistory
    plus(x:number,y:number){
        return x+y;
    }

}


const calc=new Calculator();
calc.minus(2,3);

calc.multiply(2,3);
calc.multiply(11,14);
calc.multiply(10,10);
calc.multiply(4,4);

calc.plus(2,3);
calc.plus(8,8);

console.log('_history',JSON.stringify(_history));






