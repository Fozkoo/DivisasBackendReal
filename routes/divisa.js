import { Router } from "express";
import { DivisaController } from "../controllers/divisaController.js";

export const createDivisaRouter = ({ divisaModel }) => {

    const divisasRouter = Router();

    const divisaController = new DivisaController({ DivisaModel: divisaModel });




    divisasRouter.get('/actualizar/:tipoDivisa/:tipo', (req, res) => divisaController.actualizarDivisas(req, res));
    divisasRouter.get('/actualizar/:tipoDivisa/:tipo', (req, res) => divisaController.actualizarOtrasDivisas(req, res));
    divisasRouter.get('/', (req, res) => divisaController.getAllDivisas(req, res));
    {/*
        divisasRouter.get('/:id', divisaController.getDivisaById)
    divisasRouter.get('/clasificacion/:clasificacion', divisaController.getDivisaByClasificacion)
    divisasRouter.post('/', divisaController.createNewDivisa)
    divisasRouter.delete('/:id', divisaController.deleteDivisa)
    divisasRouter.put('/:id', divisaController.updateDivisa)
    divisasRouter.patch('/:id', divisaController.updateDivisa)    
    
    */}


    return divisasRouter;

}