
function donnable(done,cb){

    return (...param)=>{
        
        try{
            if(cb)
                cb(...param);
            done(); //success. no error
        }catch(e){
            done(e);
        }
    }
}


module.exports={
    donnable
};