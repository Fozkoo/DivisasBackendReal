import cron from 'node-cron';
import { DivisaController } from '../controllers/divisaController.js';
import { DivisaModel } from '../models/mysql/divisaModel.js';

const divisaController = new DivisaController({ DivisaModel: DivisaModel });

cron.schedule('0 0 */15 * *', async () => {
    console.log('Actualizando divisas: Dólar Blue...');

    try {
        await divisaController.actualizarDivisas({ params: { tipoDivisa: 'dolares', tipo: 'blue' } });
        const nextCheckTime = new Date(Date.now() + 15 * 60 * 60 * 1000); 
        console.log('Divisas actualizadas correctamente, próximo chequeo en: ' + nextCheckTime.toLocaleString());

    } catch (error) {
        console.error('Error al actualizar divisas:', error);
    }
});

cron.schedule('0 0 */15 * *', async () => {
    console.log('Actualizando divisas: Dólar Oficial...');

    try {
        await divisaController.actualizarDivisas({ params: { tipoDivisa: 'dolares', tipo: 'oficial' } });
        const nextCheckTime = new Date(Date.now() + 15 * 60 * 60 * 1000); 
        console.log('Divisas actualizadas correctamente, próximo chequeo en: ' + nextCheckTime.toLocaleString());

    } catch (error) {
        console.error('Error al actualizar divisas:', error);
    }
});

cron.schedule('0 0 */15 * *', async () => {
    console.log('Actualizando divisas: Dólar Bolsa...');

    try {
        await divisaController.actualizarDivisas({ params: { tipoDivisa: 'dolares', tipo: 'bolsa' } });
        const nextCheckTime = new Date(Date.now() + 15 * 60 * 60 * 1000); 
        console.log('Divisas actualizadas correctamente, próximo chequeo en: ' + nextCheckTime.toLocaleString());

    } catch (error) {
        console.error('Error al actualizar divisas:', error);
    }
});

cron.schedule('0 0 */15 * *', async () => {
    console.log('Actualizando divisas: Dólar Contado con liquidacion...');

    try {
        await divisaController.actualizarDivisas({ params: { tipoDivisa: 'dolares', tipo: 'contadoconliqui' } });
        const nextCheckTime = new Date(Date.now() + 15 * 60 * 60 * 1000); 
        console.log('Divisas actualizadas correctamente, próximo chequeo en: ' + nextCheckTime.toLocaleString());

    } catch (error) {
        console.error('Error al actualizar divisas:', error);
    }
});

cron.schedule('0 0 */15 * *', async () => {
    console.log('Actualizando divisas: Dólar Tarjeta...');

    try {
        await divisaController.actualizarDivisas({ params: { tipoDivisa: 'dolares', tipo: 'tarjeta' } });
        const nextCheckTime = new Date(Date.now() + 15 * 60 * 60 * 1000); 
        console.log('Divisas actualizadas correctamente, próximo chequeo en: ' + nextCheckTime.toLocaleString());

    } catch (error) {
        console.error('Error al actualizar divisas:', error);
    }
});

cron.schedule('0 0 */15 * *', async () => {
    console.log('Actualizando divisas: Dólar Mayorista...');

    try {
        await divisaController.actualizarDivisas({ params: { tipoDivisa: 'dolares', tipo: 'mayorista' } });
        const nextCheckTime = new Date(Date.now() + 15 * 60 * 60 * 1000); 
        console.log('Divisas actualizadas correctamente, próximo chequeo en: ' + nextCheckTime.toLocaleString());

    } catch (error) {
        console.error('Error al actualizar divisas:', error);
    }
});

cron.schedule('0 0 */15 * *', async () => {
    console.log('Actualizando divisas: Dólar Cripto...');

    try {
        await divisaController.actualizarDivisas({ params: { tipoDivisa: 'dolares', tipo: 'cripto' } });
        const nextCheckTime = new Date(Date.now() + 15 * 60 * 60 * 1000); 
        console.log('Divisas actualizadas correctamente, próximo chequeo en: ' + nextCheckTime.toLocaleString());

    } catch (error) {
        console.error('Error al actualizar divisas:', error);
    }
});

cron.schedule('0 0 */15 * *', async () => {
    console.log('Actualizando divisas: Euro...');

    try {
        await divisaController.actualizarDivisas({ params: { tipoDivisa: 'cotizaciones', tipo: 'eur' } });
        const nextCheckTime = new Date(Date.now() + 15 * 60 * 60 * 1000); 
        console.log('Divisas actualizadas correctamente, próximo chequeo en: ' + nextCheckTime.toLocaleString());

    } catch (error) {
        console.error('Error al actualizar divisas:', error);
    }
});

cron.schedule('0 0 */15 * *', async () => {
    console.log('Actualizando divisas: Real Brasilenio...');

    try {
        await divisaController.actualizarDivisas({ params: { tipoDivisa: 'cotizaciones', tipo: 'brl' } });
        const nextCheckTime = new Date(Date.now() + 15 * 60 * 60 * 1000); 
        console.log('Divisas actualizadas correctamente, próximo chequeo en: ' + nextCheckTime.toLocaleString());

    } catch (error) {
        console.error('Error al actualizar divisas:', error);
    }
});

cron.schedule('0 0 */15 * *', async () => {
    console.log('Actualizando divisas: Peso Chileno...');

    try {
        await divisaController.actualizarDivisas({ params: { tipoDivisa: 'cotizaciones', tipo: 'clp' } });
        const nextCheckTime = new Date(Date.now() + 15 * 60 * 60 * 1000); 
        console.log('Divisas actualizadas correctamente, próximo chequeo en: ' + nextCheckTime.toLocaleString());

    } catch (error) {
        console.error('Error al actualizar divisas:', error);
    }
});

cron.schedule('0 0 */15 * *', async () => {
    console.log('Actualizando divisas: Peso Uruguayo...');

    try {
        await divisaController.actualizarDivisas({ params: { tipoDivisa: 'cotizaciones', tipo: 'uyu' } });
        const nextCheckTime = new Date(Date.now() + 15 * 60 * 60 * 1000); 
        console.log('Divisas actualizadas correctamente, próximo chequeo en: ' + nextCheckTime.toLocaleString());

    } catch (error) {
        console.error('Error al actualizar divisas:', error);
    }
});
