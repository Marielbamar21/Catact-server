import { Router } from "express";
import { userRouter } from "../src/router.js/userRouter.js"

export const router = Router();

    router.use('/user', userRouter);

