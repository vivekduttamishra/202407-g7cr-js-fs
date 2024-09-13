

export class ValidationException extends AppException{
    constructor(message:string,errors:any){
        super(message ,errors);       
    }
}

