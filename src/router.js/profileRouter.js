import { Router } from "express";
import { profileController } from "../controller/profileController.js";
import { validatorProfile } from "../controller/middleware/profileMiddleware.js"
const router = Router();

    router.post('/createProfile', profileController.createProfile)
            .delete('/:id_profile', validatorProfile, profileController.deleteProfile)
            .get('/Allprofile',  profileController.getAllProfile)
            .get('/:id_profile', validatorProfile, profileController.getProfile)

export const profileRouter = router;