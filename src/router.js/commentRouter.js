import { Router } from "express";
import { commentController } from "../controller/commentController.js";
//import { validatorProfile } from "../controller/middleware/profileMiddleware.js"
const router = Router();

    router.post('/createComment', commentController.createComment)
        .put('/:id_comment', commentController.updateComment)
        .delete('/:id_comment', commentController.deleteComment)
        .get('/:id_comment' , commentController.getComment)
        .get('/allComment' , commentController.getAllcomment)

        // User Like
        .put('/userLike/:id_comment/:id_profile' , commentController.addUserLike)
        .delete('/userLike/:id_comment/:id_profile' , commentController.deleteCommentReview)

        // comment Review

        .put('/review/:id_comment/:id_commentReview' , commentController.addCommentReview)
        .delete('/review/:id_comment/:id_commentReview' , commentController.deleteCommentReview)


export const commentRouter = router; //export Routers