import express from "express";
import cors from "cors";
import { router } from "./router/router.js"


export const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/catact',router);
