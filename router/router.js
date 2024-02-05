import { Router } from "express";
import { userRouter } from "../src/router.js/userRouter.js";
import { profileRouter } from "../src/router.js/profileRouter.js";
import { postRouter } from "../src/router.js/postRouter.js";
import {  hashtagRouter } from "../src/router.js/hashtagRouter.js"

export const router = Router();

    router.use('/user', userRouter);
    router.use('/profile', profileRouter);
    router.use('/post', postRouter);
    router.use('/hashtag' ,  hashtagRouter);


