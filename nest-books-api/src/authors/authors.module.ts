import { Module } from '@nestjs/common';
import { AuthorsController } from './authors.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Author } from 'src/models/author.model';
import { AuthorService } from './author.service';
import { SequelizeAuthorRepository } from './sequelize-author.repository';

@Module({
  imports:[
    SequelizeModule.forFeature([Author]),
  ],
  controllers: [AuthorsController],
  providers: [AuthorService, SequelizeAuthorRepository]
})
export class AuthorsModule {}
