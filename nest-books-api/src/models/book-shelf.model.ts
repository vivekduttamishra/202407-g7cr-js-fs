import { Table, Column, Model, DataType, ForeignKey, HasMany } from 'sequelize-typescript';
import { User } from './user.model';
import { Book } from './book.model';
import { Note } from './note.model';

@Table({
  tableName: 'bookshelves',
  timestamps: false,
})
export class BookShelf extends Model {
  // @ForeignKey(() => User)
  // @Column({
  //   type: DataType.UUID,
  //   allowNull: false,
  // })
  // userId!: string;


  @ForeignKey(() => User)
  @Column({
    type: DataType.STRING,
    field: 'email',
    allowNull: false,
  })
  userEmail!: string; 
  

  @ForeignKey(() => Book)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  bookId!: string;

  // Additional fields for the Many-to-Many relationship
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  readingStatus?: string;



  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  review?: number; // Assuming it's a rating out of 5

  @HasMany(() => Note)
  notes!: Note[];
}
