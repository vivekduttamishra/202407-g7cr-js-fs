import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { BookShelf } from './book-shelf.model';

@Table({
  tableName: 'users',
  timestamps: true,
})
export class User extends Model {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  id!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  email!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,

  })
  photo!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,

  })
  password!: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
    get() {
      const value = this.getDataValue('roles');
      return value ? JSON.parse(value) : [];
    },
    set(value: string[]) {
      this.setDataValue('roles', JSON.stringify(value.map(v=>v.toLowerCase())));
    },
  })
  roles!: string[];

  // // Many-to-Many relationship: User has many Books through BookShelf
  // @BelongsToMany(() => Book, () => BookShelf)
  // books!: Book[];

  @HasMany(() => BookShelf, {
    foreignKey: 'userEmail', // The foreign key on the BookShelf model
    sourceKey: 'email', // The key this foreign key references
  })
  bookshelves!: BookShelf[];
}
