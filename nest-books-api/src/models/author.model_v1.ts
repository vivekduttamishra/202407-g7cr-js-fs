// models/author.model.ts
import { Model, DataTypes } from 'sequelize';
import {sequelize} from './db.connection';
import {Book} from './book.model';

class Author extends Model {
  public id!: string;
  public name!: string;
}

Author.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  tableName: 'authors',
  timestamps: true,
});

// Defining associations
Author.hasMany(Book, { foreignKey: 'authorId' });
Book.belongsTo(Author, { foreignKey: 'authorId' });

//export default Author;

