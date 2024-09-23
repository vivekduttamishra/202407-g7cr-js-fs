import { Table, Column, Model, DataType, ForeignKey, BelongsTo, BelongsToMany, HasMany } from 'sequelize-typescript';
import { Author } from './author.model';
import { User } from './user.model';
import { BookShelf } from './book-shelf.model';
import { Review } from './review.model';

@Table({
  tableName: 'books',
  timestamps: true,
})
export class Book extends Model {
  @Column({
    // type: DataType.UUID,
    // defaultValue: DataType.UUIDV4,
    type:DataType.STRING,
    primaryKey: true,
  })
  id!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  cover!: string;

  @Column({
    type: DataType.DECIMAL(10, 2),
    allowNull: false,
  })
  price!: number;

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

  // Many-to-One relationship: Book belongs to Author
  @ForeignKey(() => Author)
  @Column({
    //type: DataType.UUID,
    type:DataType.STRING,
    allowNull: false,
  })
  authorId!: string;

  @BelongsTo(() => Author)
  author!: Author;

  // Many-to-Many relationship: Book belongs to many Users through BookShelf
  @BelongsToMany(() => User, () => BookShelf)
  users!: User[];

  @HasMany(() => Review)
  reviews!: Review[];

  // Getter to calculate average rating from reviews
  get rating(): number {
    if (this.reviews.length === 0) return 0;
    const totalRating = this.reviews.reduce((sum, review) => sum + review.rating, 0);
    return totalRating / this.reviews.length;
  }

  // Getter to count total votes (number of reviews)
  get votes(): number {
    return this.reviews.length;
  }
}
