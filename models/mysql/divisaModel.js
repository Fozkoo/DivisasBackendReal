import mysql from 'mysql2/promise';
import { Sequelize, DataTypes } from 'sequelize';

export const sequelize = new Sequelize('divisasdb', 'root', '1234', {
  host: 'localhost',
  dialect: 'mysql',
  logging: true,
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


 
{/* 
const config = {
    host: 'localhost',
    user: 'root',
    port: '3306',
    password: '1234',
    database: 'divisasdb'
}

const connection = await mysql.createConnection(config);


export class DivisaModel {

    static async getAllDivisas(){
        const [divisas] = await connection.query('SELECT * FROM divisas')
        console.log("divisas encontradas")
        return divisas;
    }


    static async getDivisaById(id) {
        const query = 'SELECT id, nombre, clasificacion, precio, tope, min FROM divisas.divisa WHERE id = ?';
        const [divisa] = await connection.query(query, [id]);

        return divisa;
    }


    static async getDivisaByClasificacion(clasificacion) {
        const query = 'SELECT id, nombre, clasificacion, precio, tope, min FROM divisas.divisa WHERE clasificacion = ?';
        const [divisa] = await connection.query(query, [clasificacion]);
        return divisa;
    }

    static async createNewDivisa({ nombre, clasificacion, precio, tope, min }) {
        const query = 'INSERT INTO divisa (nombre, clasificacion, precio, tope, min) VALUES (?, ?, ?, ?, ?)';
    
        try {
            const [result] = await connection.query(query, [nombre, clasificacion, precio, tope, min]);
    
            if (result.affectedRows === 0) {
                throw new Error('No se pudo insertar la divisa');
            }
            return { id: result.insertId, nombre, clasificacion, precio, tope, min };
        } catch (error) {
            throw new Error('Error al insertar la divisa: ' + error.message);
        }
    }

    static async deleteDivisa({ id }) {
  
        const selectQuery = 'SELECT id, nombre, clasificacion, precio, tope, min FROM divisas.divisa WHERE id = ?';
        const [divisa] = await connection.query(selectQuery, [id]);
    
        if (divisa.length === 0) {
            throw new Error('Divisa no encontrada');
        }
    

        const deleteQuery = 'DELETE FROM divisa WHERE id = ?';
        await connection.query(deleteQuery, [id]);
    
    
        return divisa[0];
    }



    static async updateDivisa({ moneda, casa, nombre, compra, venta, fechaActualizacion }) {

        const queryDolar = 'UPDATE divisa SET nombre = ?, casa = ?, compra = ?, venta = ?, fechaActualizacion = ? WHERE moneda = ?';


}}
*/}

