import { app } from "../index.js";
import { config } from "../config/index.js";

app.listen(config.port,()=> {console.log(`servidos  escuchando en el puerto ${config.port}`)});