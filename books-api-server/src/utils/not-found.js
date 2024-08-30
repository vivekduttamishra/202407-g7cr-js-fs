class NotFoundException extends Error{
    constructor(message, params){
        super(message);
        this.info={
            message,
            ...params
        }
    }
}

module.exports=NotFoundException;