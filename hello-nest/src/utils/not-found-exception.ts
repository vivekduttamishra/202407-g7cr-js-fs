
export class NotFoundException extends AppException{
    constructor(message:string, errors:any){
        super(message,errors);       
    }
}

