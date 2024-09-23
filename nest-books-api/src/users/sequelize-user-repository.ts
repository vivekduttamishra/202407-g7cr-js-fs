
import { Injectable } from '@nestjs/common';
import { User } from '../models/user.model';
import * as bcrypt from 'bcrypt';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class SequelizeUserRepository  {
  constructor(
    @InjectModel(User) private userModel: typeof User,  // Inject the Author model directly
  ) {}

  // Register a new user
  async registerUser(userDto: Partial<User>): Promise<User> {
    userDto.password = await bcrypt.hash(userDto.password, 10); // Hash password
    return this.userModel.create(userDto);
  }

  async getAllUsers(): Promise<User[]> {
    return this.userModel.findAll();
  }

  async updateUser(email: string, user: Partial<User>): Promise<[number, User[]]> {
    return this.userModel.update(user, { where: { email }, returning: true });
  }


  // Find a user by email
  async findUserByEmail(email: string): Promise<User | null> {
    return this.userModel.findOne({ where: { email } });
  }

  async deleteUserByEmail(email: string):Promise<number>{
    return await this.userModel.destroy({ where: { email } });
  }

  // Verify user password
  async verifyPassword(email: string, password: string): Promise<User|undefined> {
    const user = await this.findUserByEmail(email);
    if (!user) return undefined;
    const success=await bcrypt.compare(password, user.password);
    if(success)
        return user;
  }

  
}
