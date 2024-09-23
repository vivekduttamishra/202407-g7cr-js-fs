import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Author } from 'src/models/author.model';
import { BookShelf } from 'src/models/book-shelf.model';
import { Book } from 'src/models/book.model';
import { Note } from 'src/models/note.model';
import { Review } from 'src/models/review.model';
import { User } from 'src/models/user.model';
import { BookService } from './book.service';
import { SequelizeBookRepository } from './sequelize-book-repository';
import { BooksController } from './books.controller';

@Module({
    imports:[
        SequelizeModule.forFeature([Author,Book,Review,BookShelf,Note,User])
    ],
    providers: [BookService, SequelizeBookRepository],
    controllers: [BooksController]
})
export class BooksModule {}
