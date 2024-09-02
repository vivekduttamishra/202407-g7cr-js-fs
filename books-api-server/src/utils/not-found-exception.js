const AppException =require('./app-exception');

class NotFoundException extends AppException{
    constructor(...params){
        super(...params);       
    }
}

module.exports=NotFoundException;