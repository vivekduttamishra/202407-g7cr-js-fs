const AppException =require('./app-exception');

class ValidationException extends AppException{
    constructor(...params){
        super(...params);       
    }
}

module.exports=ValidationException;