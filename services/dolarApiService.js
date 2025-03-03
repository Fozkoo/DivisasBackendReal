import axios from "axios";

export const obtenerDivisas = async (endpoint, tipo) => {
    try {
        const response = await axios.get(`https://dolarapi.com/v1/${endpoint}/${tipo}`);
        return response.data;
    } catch (error) {
        console.error(`Error al obtener datos de ${endpoint}:`, error.message);
        return { error: true, message: `Error al obtener ${endpoint}` };
    }
};

export const getDolarTarjeta = () => getDolarData('dolares/tarjeta');
export const getAllDolar = () => getDolarData('dolares');
export const getDolarOficial = () => getDolarData('dolares/oficial');
export const getDolarBlue = () => getDolarData('dolares/blue');
export const getDolarBolsa = () => getDolarData('dolares/bolsa');
export const getDolarCCL = () => getDolarData('dolares/contadoconliqui');
export const getDolarMayorista = () => getDolarData('dolares/mayorista');
export const getDolarCripto = () => getDolarData('dolares/cripto');
export const getEuro = () => getDolarData('cotizaciones/eur');
export const getRealBrasilero = () => getDolarData('cotizaciones/brl');
export const getPesoChileno = () => getDolarData('cotizaciones/clp');
export const getPesoUruguayo = () => getDolarData('cotizaciones/uyu');
