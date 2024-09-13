import { Module } from '@nestjs/common';
import { AuthorsController } from './controllers/authors.controller';

@Module({

  controllers: [AuthorsController]
})
export class AuthorsModule {}
