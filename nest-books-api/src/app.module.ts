import { Module } from '@nestjs/common';
import { AuthorsModule } from './authors/authors.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { sequelizeOptions } from './models/db.connection';
import { BooksModule } from './books/books.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    SequelizeModule.forRoot({...sequelizeOptions}),
    AuthorsModule,
    BooksModule,
    UsersModule,
    AuthModule
  ]
})
export class AppModule {}
 