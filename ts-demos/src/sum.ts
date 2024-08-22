function sum(...numbers:number[]):number{
    let result=0;

    for(let number of numbers){
        result+=number;
    }
    return result;
}