import { hashtagService } from "../../service/hashtagServer.js";
import { postService } from "../../service/postService.js";
import { profileService } from "../../service/profileService.js";
import { commentService } from "../../service/commentService.js"
import { handleError, handleResponse } from "../../common/errorHandlers.js";
import { message } from "../../common/message.js";



export const validatorProfile = async(req,res,next)=>{
    try{
        const {params: {id_profile}} = req;
        const profile = await profileService.getOneProfile(id_profile);
        !profile ? handleResponse(res,400,message.err_profile) : next();
    }
    catch(err){
        handleError(err,res);
    }

}

export const validatorPost = async(req,res,next) => {
    try{
        const {params: {id_post}} = req;
        const post = await postService.getPost(id_post);
        !post ? handleResponse(res,400,message.err_post) : next();
    }
    catch(err){
        handleError(err,res);
    }
}

export const validatorHashtag = async(req,res,next) => {
    try{
        const {name} = req.body;
        const hashtag = await hashtagService.getHashtagByName(name.trim());
        if(!hashtag) {
            hashtagService.createHashtag(name);
            console.log('Hashtag: ',message.create_succesful);
            return next();
        }
        return next();
    }
    catch(err){
        handleError(err,res)
    }
}

export const validatorComment = async( req,res,next ) => {
    try{
        const {params : {id_comment}} = req;
        const comment = await commentService.getOneComment(id_comment);
        !comment ? handleResponse(res,200,message.err_comment,null) : next()
    }
    catch(err){
        handleError(err,res)
    }

}