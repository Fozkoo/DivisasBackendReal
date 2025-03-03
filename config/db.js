import { Sequelize } from "sequelize";


export const sequelize = new Sequelize('divisasdb', 'root', '1234', {
    host: 'localhost',
    dialect: 'mysql'
});

