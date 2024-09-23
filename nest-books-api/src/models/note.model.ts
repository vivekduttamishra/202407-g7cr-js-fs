import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { BookShelf } from './book-shelf.model';

@Table({
  tableName: 'notes',
  timestamps: false,
})
export class Note extends Model {
  @ForeignKey(() => BookShelf)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  bookshelfId!: string; // References the BookShelf entry

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  text!: string; // Note text

  // Foreign key relationship
  @BelongsTo(() => BookShelf, { foreignKey: 'bookshelfId' })
  bookshelf!: BookShelf;
}
