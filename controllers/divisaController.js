import { validateDivisa } from "../schemas/schema.js";
import { DivisaModel } from "../models/mysql/divisaModel.js";
import { obtenerDivisas } from '../services/dolarApiService.js';

export class DivisaController {

    constructor({ DivisaModel }) {
        this.DivisaModel = DivisaModel;
    }

    actualizarDivisas = async (req, res) => {

        const { tipoDivisa, tipo } = req.params;

        console.log(tipoDivisa, tipo); 


        // -> Peticion a la Api de DolarApi
        let apiDivisa;
        try {
            apiDivisa = await obtenerDivisas(tipoDivisa, tipo);
            console.log("Divisas:", JSON.stringify(apiDivisa, null, 2));
            res.json(apiDivisa)
        } catch (err) {
            console.log(err);
        }

        // -> Peticion a la BDD
        let dbDivisa;
        try {

            dbDivisa = await this.DivisaModel.findOne({
                where: {
                    tipoDivisa: tipoDivisa,      // --> dolares
                    tipo: tipo   // --> Tarjeta
                }
            })

            if (dbDivisa) {
                console.log("Divisa: de la bdd", dbDivisa.dataValues);
            } else {
                console.log("No se encontro la divisa en la bdd");
            }

        } catch (err) {
            console.log("entre aca::" + err);
        }

        if (apiDivisa && dbDivisa) {
            console.log("Ambas divisas fueron encontradas");
        
            const diferencias = {}
        
            if (apiDivisa.compra !== dbDivisa.dataValues.compra) {
                diferencias.compra = {
                    api: apiDivisa.compra,
                    db: dbDivisa.dataValues.compra
                }
            }
        
            if (apiDivisa.venta !== dbDivisa.dataValues.venta) {
                diferencias.venta = {
                    api: apiDivisa.venta,
                    db: dbDivisa.dataValues.venta
                }
            }
        
            if (apiDivisa.fechaActualizacion !== dbDivisa.dataValues.fechaActualizacion) {
                diferencias.fechaActualizacion = {
                    api: apiDivisa.fechaActualizacion,
                    db: dbDivisa.dataValues.fechaActualizacion
                }
            }
        
            if (Object.keys(diferencias).length > 0) {
                console.log("Se encontraron diferencias entre la divisa de la api y la divisa de la bdd");
                console.log(diferencias);
        
               
                try {
                    const updatedDivisa = await this.DivisaModel.update(
                        {
                            compra: apiDivisa.compra,
                            venta: apiDivisa.venta,
                            fechaActualizacion: apiDivisa.fechaActualizacion
                        },
                        {
                            where: {
                                tipoDivisa: tipoDivisa,     
                                tipo: tipo   
                            }
                        });
                    console.log("Base de datos actualizada:", updatedDivisa);
                } catch (err) {
                    console.log("Error al actualizar la base de datos:", err);
                }
            } else {
                console.log("No se encontraron diferencias entre la divisa de la api y la bd");
            }
        }
        
    }

    getAllDivisas = async (req, res) => {
        const divisas = await this.DivisaModel.findAll();
        res.json(divisas);
    }

};




