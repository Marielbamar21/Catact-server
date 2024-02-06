import { Router } from "express";
import { postController } from "../controller/postController.js";
import { validatorHashtag,validatorComment,validatorPost,validatorProfile } from "../controller/middleware/postMiddleware.js";

//import { validatorProfile } from "../controller/middleware/profileMiddleware.js"
const router = Router();

    router.post('/createPost/:id_profile',validatorProfile, postController.createPost) //Router Create Post
            .put('/:id_post', validatorPost, postController.updatePost) // Router update Post
            .delete('/:id_post', validatorPost, postController.deletePost) //Router Delete Post
            .get('/allPost',  postController.getAllPost) //Router Show all post
            .get('/:id_post', postController.getPost) // Router Show one Post
            .get('/userPost/:id_profile', validatorProfile, postController.getPostbyUser) //Router Show one post by id_profile's user

            //----------UserLile----------//


            .put('/userLike/:id_post/:id_profile',[validatorPost,validatorProfile], postController.addUserLike) // Router add User Like
            .delete('/userLike/:id_post/:id_profile', [validatorPost,validatorProfile], postController.deleteUserLike) //Router Delete User Like
            

            //----------Hashtag----------//
            
            .put('/hashtag/:id_post',[ validatorPost,validatorHashtag], postController.addHashtag ) //Router add Hashtag
            .delete('/hashtag/:id_post/', postController.deleteHashtag) // Router Delete Hashtag
            
            // ---------- Comment --------- //

            .put('/comment/:id_post/:id_profile', postController.addComment)
            .delete('/comment/:id_post/:id_comment', postController.deleteComment)

export const postRouter = router; //export Routers