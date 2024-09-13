import { AppException } from "./app-exception";


export class InvalidCredentialsError extends AppException{
    constructor(message:string,errors:any){
        super(message,errors);       
    }
}

