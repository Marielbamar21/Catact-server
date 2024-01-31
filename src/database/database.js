import mongoose from "mongoose";
import { config } from "../../config/index.js";
import { handleError } from "../common/errorHandlers.js"

const dataBase = async () => {
    try {
        if (mongoose.connection.readyState === 1) {
            console.log('Ya se encuentra conectado a la base de datos');
            return Promise.resolve();
        } else {
            await mongoose.connect(config.host_uri_bd);
            console.log('Base de Datos conectada exitosamente');
            return Promise.resolve();
        }
    } catch (err) {
        reject(err);
    }
};

export default dataBase;

