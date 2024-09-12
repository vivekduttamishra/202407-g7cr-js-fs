import { delay } from "../utils/delay";
import { User } from "./user";



const users:User[]=[
    {name: 'Vivek Dutta Mishra', email:'vivek@conceptarchitect.in', password:"p@ss",photo:"",roles:['admin','moderator']},
    {name: 'Sanjay Mall', email:'sanjay@gmail.com', password:"p@ss",photo:"",roles:['user','employee']},
    {name: 'Vivek Dutta Mishra', email:'vivek@conceptarchitect.in', password:"p@ss",photo:"", roles:["user",'customer']},
];

export class InMemoryUserService {

    login=async(email:string, password:string)=>{
        await delay(2000);
        const user= users.find(u=> u.email === email && u.password === password);
        if(user){
            let result = {...user};
            result.password="";
            return result;
        }
            
        else
            throw new Error('Invalid Credentials');
    }

    register= async(user:User)=>{
        await delay(3000);
        var existingUser= users.find(u=> u.email === user.email);
        if(existingUser)
            throw new Error('Email already exists');

        users.push(user);
        let result={...user};
        result.password="";
        return result;
    }

}