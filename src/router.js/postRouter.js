import { Router } from "express";
import { postController } from "../controller/postController.js";
//import { validatorProfile } from "../controller/middleware/profileMiddleware.js"
const router = Router();

    router.post('/createPost/:id_profile', postController.createPost)
            .delete('/:id_post', postController.deletePost)
            .delete('/:id_post/:id_profile', postController.deleteUserLike)
            .put('/:id_post', postController.updatePost)
            .put('/:id_post/:id_profile', postController.addUserLike)
            .get('/allPost',  postController.getAllPost)
            .get('/:id_post', postController.getPost)
            .get('/userPost/:id_profile', postController.getPostbyUser);


export const postRouter = router;