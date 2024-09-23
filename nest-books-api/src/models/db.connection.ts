import { User } from './user.model';
import { Book } from './book.model';
import { BookShelf } from './book-shelf.model';
import { Note } from './note.model';

import { SyncOptions } from 'sequelize';
import { Sequelize, SequelizeOptions } from 'sequelize-typescript';
import { Author } from './author.model';
import * as dotenv from 'dotenv';
import { Review } from './review.model';

dotenv.config();

export const sequelizeOptions: SequelizeOptions = {
  dialect: 'sqlite',
  storage: process.env.DB_STORE, // Path to SQLite database file
  models: [Author, Review, User, Book, BookShelf, Note], // Include your models
  logging: false, // Disable logging if not needed

};

export const sequelize = new Sequelize(sequelizeOptions);
  

export const verifyConnection= async()=>{
    try{

        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    }catch(err){
        console.log('An Error has occurred',err)
    }

}

export async function sync(options:SyncOptions={alter:true}) {
    try {
      // Synchronize models with the database
      await sequelize.sync(options); // Use { force: true } to drop and recreate tables
  
      console.log('Database synchronized');
  
      // Start your application logic here
    } catch (error) {
      console.error('Error synchronizing database:', error);
    }
  }

