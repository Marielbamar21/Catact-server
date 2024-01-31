import { Router } from "express";
import { profileController } from "../controller/profileController.js";

const router = Router();

    router.post('/createProfile', profileController.createProfile)
            /*.put('/updateUser/:id_user', userController.updateUser)
            .get('/Alluser', userController.getAllUser)
            .get('/:id_user', userController.getUser)*/

export const profileRouter = router;