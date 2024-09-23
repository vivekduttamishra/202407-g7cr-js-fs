import { Injectable } from '@nestjs/common';
import { Book } from '../models/Book.model';
import { InjectModel } from '@nestjs/sequelize';
import { Author } from 'src/models/author.model';
import { Op } from 'sequelize';

@Injectable()
export class SequelizeBookRepository  {
    constructor(
        @InjectModel(Author) private bookModel: typeof Book,  // Inject the Author model directly
    ) {}

  // Create a new book
  async createBook(bookDto: Partial<Book>): Promise<Book> {
    return this.bookModel.create(bookDto);
  }

  // Read all books
  async findAllBooks(): Promise<Book[]> {
    return this.bookModel.findAll();
  }

  // Find a book by ID
  async findBookById(id: string): Promise<Book | null> {
    return this.bookModel.findByPk(id);
  }

  // Update a book
  async updateBook(id: string, bookDto: Partial<Book>): Promise<[number, Book[]]> {
    return this.bookModel.update(bookDto, { where: { id }, returning: true });
  }

  // Delete a book
  async deleteBook(id: string): Promise<number> {
    return this.bookModel.destroy({ where: { id } });
  }

  // Find books by tags
  async findBooksByTag(tag: string): Promise<Book[]> {
    return this.bookModel.findAll({
      where: {
        tags: {
          [Op.like]: `%${tag}%`,
        },
      },
    });
  }
}
