import { Router } from "express";
import { userRouter } from "../src/router.js/userRouter.js";
import { profileRouter } from "../src/router.js/profileRouter.js";

export const router = Router();

    router.use('/user', userRouter);
    router.use('/profile', profileRouter);


