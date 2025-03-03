import express, { json } from 'express';
import { createDivisaRouter } from './/routes/divisa.js';
import { corsMiddleware } from './middlewares/cors.js';
import "./utils/cronJob.js";
const app = express();


export const createApp = ({ divisaModel }) => {

  app.disable('x-powered-by')
  app.use(json());
  app.use(corsMiddleware())
  app.use('/divisas', createDivisaRouter({ divisaModel }))

  const PORT = process.env.PORT ?? 1234

  app.listen(PORT, () => {
    console.log("Server is running on port 1234")
  })

}


