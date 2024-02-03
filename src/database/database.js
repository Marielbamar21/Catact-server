import mongoose from "mongoose";
import { config } from "../../config/index.js";
import { handleError } from "../common/errorHandlers.js"

const dataBase = async () => {
    try {
        if (mongoose.connection.readyState === 1) {
            console.log('Ya se encuentra conectado a la base de datos');
            return Promise.resolve();
        } else {
            await mongoose.connect(config.host_uri_bd).then(()=> console.log('Base de Datos conectada exitosamente')).catch((err) => console.log('No se pudo conectar a la bd', err));
            
            return Promise.resolve();
        }
    } catch (err) {
        console.log('Error al conectar con la data base', err);
        return Promise.reject();
    }
};

export default dataBase;

