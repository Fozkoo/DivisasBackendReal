import mysql from 'mysql2/promise';
import { Sequelize, DataTypes } from 'sequelize';

export const sequelize = new Sequelize('divisasdb', 'root', '1234', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
});

export const DivisaModel = sequelize.define('divisas', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  moneda: { type: DataTypes.STRING, allowNull: false },
  casa: { type: DataTypes.STRING, allowNull: false },
  nombre: { type: DataTypes.STRING, allowNull: false },
  compra: { type: DataTypes.DOUBLE, allowNull: false },
  venta: { type: DataTypes.DOUBLE, allowNull: false },
  fechaActualizacion: { type: DataTypes.STRING, allowNull: false },
  tipoDivisa: { type: DataTypes.STRING, allowNull: false },
  tipo: { type: DataTypes.STRING, allowNull: false },
}, {
        timestamps: false // Esto deshabilita la creación de las columnas createdAt y updatedAt
});