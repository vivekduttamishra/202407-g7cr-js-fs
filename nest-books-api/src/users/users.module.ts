import { Module } from '@nestjs/common';
import { SequelizeUserRepository } from './sequelize-user-repository';
import { UserService } from './user.service';
import { UsersController } from './users.controller';
import { User } from 'src/models/user.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports:[ SequelizeModule.forFeature([User])],
  controllers: [UsersController],
  providers: [SequelizeUserRepository, UserService],
})
export class UsersModule {}
