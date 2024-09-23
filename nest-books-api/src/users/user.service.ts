import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { SequelizeUserRepository } from './sequelize-user-repository';
import * as jwt from 'jsonwebtoken';
import { User } from 'src/models/user.model';

@Injectable()
export class UserService {
  async updateRoles(email: string, data: any) {
      const dbUser= await this.userRepository.findUserByEmail(email);
      if(!dbUser){
        throw new NotFoundException({error:'User not found',email});
      }
      let roles = dbUser.roles || [];
      if(data.add){
        roles=[...roles,...data.add];
      } 
      
      if(data.remove){
        data.remove=data.remove.map(r=>r.toLowerCase());
        roles=roles.filter(role=>!data.remove.includes(role));
      }

      dbUser.roles=roles;
      const result =await dbUser.save();
      
      return result.toJSON();

  }
  constructor(private readonly userRepository: SequelizeUserRepository) {}

  async validateUser(email: string, verifyPassword: string): Promise<any> {
    
    const user = await this.userRepository.verifyPassword(email, verifyPassword);
    if(user){
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        return user.toJSON();

    }
    
  }

  async login(email: string, password: string): Promise<any>{
    const user = await this.validateUser(email, password);
    if(user){
        return this.getLoginReponse(user);
    } else{
        throw new UnauthorizedException('Invalid Credentials');
    }
  }

  async getLoginReponse(user: any) {
    const payload = { roles:user.roles, email: user.email, sub: user.id };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, prefer-const
    
    delete user.password;
    delete user.createdAt;
    delete user.updatedAt;

    return {
      user,
      token: jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' }),
    };
  }

  async register(user:Partial<User>, stripRoles: boolean = true){
    try{
      if(stripRoles){
        user={...user, roles:['user']};
      }
      const result = await this.userRepository.registerUser(user);
      return this.getLoginReponse(result.toJSON());

    }catch(err){
      throw new BadRequestException(err.errors);
    }
   
  }

  async verifyToken(token: string) {
    return jwt.verify(token, process.env.JWT_SECRET);
  }

  async getAllUsers(){
    const authors=await this.userRepository.getAllUsers();
    const result = authors.map(a=> a.toJSON()).map(a=> {
      delete a.password;
      delete a.createdAt;
      delete a.updatedAt;
      return a;
    });
    return result;
  }

  async removeUser(email: string) {
    const result = await this.userRepository.deleteUserByEmail(email);
    if(result===0)
      throw new NotFoundException({error:'Invalid User',email});
  }

}
