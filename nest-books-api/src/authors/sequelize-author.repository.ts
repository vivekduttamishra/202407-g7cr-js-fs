import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Author } from '../models/author.model';

@Injectable()
export class SequelizeAuthorRepository {
  constructor(
    @InjectModel(Author) private authorModel: typeof Author,  // Inject the Author model directly
  ) {}

  async addAuthors(authorsDto: Partial<Author>[]): Promise<Author[]> {
    const result= await this.authorModel.bulkCreate(authorsDto);
    return result.map(a=>a.toJSON());
  }

  async createAuthor(authorDto: Partial<Author>): Promise<Author> {
    const result = await this.authorModel.create(authorDto);
    return result.toJSON();
  }

  async findAllAuthors(): Promise<Author[]> {
    return this.authorModel.findAll();
  }

  async findAuthorById(id: string): Promise<Author | null> {
    return this.authorModel.findByPk(id);
  }

  async updateAuthor(id: string, authorDto: Partial<Author>): Promise<[number, Author[]]> {
    return this.authorModel.update(authorDto, { where: { id }, returning: true });
  }

  async deleteAuthor(id: string): Promise<number> {
    return this.authorModel.destroy({ where: { id } });
  }

  async findAuthorsByTag(tag: string): Promise<Author[]> {
    return this.authorModel.findAll({
      where: {
        tags: {
          $like: `%${tag}%`,  // Assuming CSV or JSON tags
        },
      },
    });
  }
}

