import { Router } from "express";
import { commentReviewController } from "../controller/commentReviewController.js";
//import { validatorProfile } from "../controller/middleware/profileMiddleware.js"
const router = Router();

    router.post('/createReview', commentReviewController.createCommentReview)
        .put('/:id_commentReview', commentReviewController.updateCommentReview)
        .delete('/:id_commentReview' , commentReviewController.deleteCommentReview )
        .get('/:id_commentReview' , commentReviewController.getCommentReview)
        .get('/reviewByComment' , commentReviewController.getAllReviewbyComment)


export const commentReviewRouter = router; //export Routers