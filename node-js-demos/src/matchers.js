
var selectAll = _=>true;

function take(n,matcher){
    var count=0;
    if(!matcher)
        matcher= selectAll;
    return v =>{
        if(n && count===n)
            return ; //break the loop
        var matched = matcher(v);
        if(matched)
            count++;
        return matched;
    }
}

function skip(n, matcher){
    if(!matcher) matcher= selectAll;
    var count=0;
    return v=>{
        count++;
        if(count<n)
            return false;
        else
            return matcher(v);
    }
}

function distinct(selector){

    var _selected=[];

    return v=>{
        var current=selector(v);
        var alreadySelected = _selected.includes(current);

        //if selected is selected for the first time
        if(!alreadySelected){
            //step #1. remember that we have selected it
            _selected.push(current);
            //step #2. return true;
            return true;

        }

        //return false if selected item is already selected.
        return false;
    }
}




module.exports={
    take,
    skip,
    distinct
}