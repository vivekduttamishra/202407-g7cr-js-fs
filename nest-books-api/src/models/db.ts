import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'books.sqlite'
});

export const connect= async()=>{
    try{

        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    }catch(err){
        console.log('An Error has occurred',err)
    }

}