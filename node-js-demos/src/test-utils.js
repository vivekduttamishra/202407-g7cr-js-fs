
function donnable(done,cb){

    return (...param)=>{
        
        try{
    
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