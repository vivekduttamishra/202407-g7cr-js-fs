import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Book } from './book.model';

@Table({
  tableName: 'authors',
  timestamps: true,
})
export class Author extends Model {
  @Column({
    type: DataType.STRING,    
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
  })
  biography!: string;

  @Column({
    type: DataType.STRING,
    
    allowNull: false,
  })
  photograph!: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
    get() {
      const value = this.getDataValue('tags');
      return value ? JSON.parse(value) : [];
    },
    set(value: string[]) {
      this.setDataValue('tags', JSON.stringify(value));
    },
  })
  tags!: string[];

  // One-to-Many relationship: Author has many Books
  @HasMany(() => Book)
  books!: Book[];
}
