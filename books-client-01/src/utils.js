

function take(n,matcher){
    var count=0;
    if(!matcher)
        matcher= v=>true;
    return v =>{
        if(n && count===n)
            return ; //break the loop
        var matched = matcher(v);
        if(matched)
            count++;
        return matched;
    }
}

try{
    module.exports={
        take
    }
}catch(e){
    
}