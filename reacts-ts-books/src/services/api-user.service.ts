import { delay } from "../utils/delay";
import { User } from "./user";
import axios from "./api";


const users: User[] = [
    { name: 'Vivek Dutta Mishra', email: 'vivek@conceptarchitect.in', password: "p@ss", photo: "", roles: ['admin', 'moderator'] },
    { name: 'Sanjay Mall', email: 'sanjay@gmail.com', password: "p@ss", photo: "", roles: ['user', 'employee'] },
    { name: 'Vivek Dutta Mishra', email: 'vivek@conceptarchitect.in', password: "p@ss", photo: "", roles: ["user", 'customer'] },
];

const url = "/users"

export class ApiUserService {

    login = async (email: string, password: string) => {
        try {
            const { data } = await axios.post(`${url}/login`, {
                email,
                password
            });
            console.log('login data', data);
           return this._recordUser(data);

        } catch (error:any) {
            

            throw new Error(error.response.data.message);
        }
    }

    _recordUser(data:any){
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        return data.user;
    }

    register = async (user: User) => {
        try{

            const { data } = await axios.post(url, user);
            localStorage.setItem('token', data.token);
            return this._recordUser(data);
        }catch(error:any){
            throw new Error(error.response.data.message);
        }
    }

    logout= async()=>{
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        return null;
    }

    getLoggedInUser=()=>{
        try{
            var userStr= localStorage.getItem('user');
            if(!userStr)
                return null;
            return JSON.parse(userStr);
        }catch(error){
            return null;
        }
    }

}