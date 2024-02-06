import { Comment } from "../model/comment.js";
import dataBase from "../database/database.js";
import { handleResponse,handleError } from "../common/errorHandlers.js";
import { message } from "../common/message.js"

export const commentService = {
    createComment : async( body ) =>{
        try{
            await dataBase();
            const newComment = await Comment(body);
            const comment = await newComment.save();
            return comment;
        }
        catch(err){
            console.log(message.error_create, err);
        }
    },
    updateComment : async( id_comment, contentComment ) =>{
        try{
            await dataBase();
            const comment = await Comment.findByIdAndUpdate(id_comment, { content : contentComment, dateUpdate: new Date});
            return comment;
        }
        catch(err){
            console.log(message.error_update, err);
        }
    },
    deleteComment : async(id_comment) => {
        try{
            await dataBase();
            const comment = await Comment.findByIdAndUpdate(id_comment,{status : false, dataUpdate : new Date});
            return comment;
        }
        catch(err){
            console.log(message.error_delete,err);
        }
    },
    getOneComment :  async(id_comment) => {
        try{
            await dataBase();
            const comment = await Comment.findOne({_id : id_comment, status : true});
            return comment;
        }
        catch(err){
            console.log(message.error_get,err);
        }
    },
    getAllComment : async() => {
        try{
            await dataBase();
            const comment = await Comment.find({status: true});
            return comment;
        }
        catch(err){
            console.log(message.error_get,err);
        }
    },
    addCommentReview : async(id_comment, id_commentReview) => {
        try{
            await dataBase();
            const comment = await Comment.findByIdAndUpdate(id_comment,{$addToSet : {commentReview : { id_commentReview : id_commentReview}}});
            return comment;
        }
        catch(err){
            console.log(message.error_get,err);
        }
    },
    deleteCommentReview : async(id_comment, id_commentReview) => {
        try{
            await dataBase();
            const comment = await Comment.findByIdAndUpdate(id_comment,{$pull : {commentReview : { id_commentReview : id_commentReview}}});
            return comment;
        }
        catch(err){
            console.log(message.error_get,err);
        }
    },
    addteUserLike : async(id_comment,id_profile) => {
        try{
            await dataBase();
            const userLike = await Comment.findByIdAndUpdate(id_comment, { $addToSet: { userLike : {id_profile: id_profile} }, dateUpdate: new Date}, {new : true});
            return userLike;
        }
        catch(err){
            console.log(message.error_create, err);
        }
    },
    deleteUserLike : async(id_comment,id_profile) => {
        try{
            await dataBase();
            const userLike = await Comment.findByIdAndUpdate(id_comment, { $pull : { userLike : { id_profile : id_profile} }, dateUpdate: new Date}, {new : true});
            return userLike;
        }
        catch(err){
            console.log(message.error_delete,err);
        }
    },
}