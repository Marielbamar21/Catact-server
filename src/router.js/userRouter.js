import { Router } from "express";
import { userController } from "../controller/userController.js";

const router = Router();

    router.post('/newUser', userController.createUser)
            .put('/uptateUser/:id_user', userController.updateUser)
            .get('/Alluser', userController.getAllUser)
            .get('/:id_user', userController.getUser)

export const userRouter = router;