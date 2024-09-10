import { delay } from "../utils/delay";
import { User } from "./user";



const users:User[]=[
    {name: 'Vivek Dutta Mishra', email:'vivek@conceptarchitect.in', password:"p@ss",photo:"",},
    {name: 'Vivek Dutta Mishra', email:'vivek@conceptarchitect.in', password:"p@ss",photo:"",},
    {name: 'Vivek Dutta Mishra', email:'vivek@conceptarchitect.in', password:"p@ss",photo:"",},
];

export class InMemoryUserService {

    async login(email:string, password:string){
        await delay(2000);
        return users.find(u=> u.email === email && u.password === password);
    }

}