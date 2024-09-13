import { DataTypes } from "sequelize";
import { sequelize } from "./db";




export const Author= sequelize.define('Author', {

    id:{ 
        type:DataTypes.STRING,
        primaryKey: true
    },
    name: DataTypes.STRING,
    biography: DataTypes.STRING,
    photo: DataTypes.STRING,
});

Author.sync();
