var global="global";

function f1(){
    var f1Local="f1Local";
    console.log('in f1()')
    console.log('f1Local',f1Local);
    console.log('global',global);
    f1Local="local modified by f1";
    global="global modified by f1";
    
}

function f2(){
    f2Local="f2local";
    console.log('in f2()')
    console.log('f2local',f2Local);
    console.log('global',global);
    f2Local="f2local modified by f2";
    global="global modified by f2";    
}

function f3(){
    console.log('in f3()')
    console.log('global',global);
    console.log('f2Local',f2Local);
    console.log('f1Local',f1Local);
    
}