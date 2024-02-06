import { CommentReview } from "../model/commentReview.js";
import dataBase from "../database/database.js";
import { handleResponse,handleError } from "../common/errorHandlers.js";
import { message } from "../common/message.js"

export const commentReviewService = {
    createCommentReview : async( body ) =>{
        try{
            await dataBase();
            const newCommentReview = await CommentReview(body);
            const commentReview = await newCommentReview.save();
            return commentReview;
        }
        catch(err){
            console.log(message.error_create, err);
        }
    },
    updateCommentReview : async( id_commentReview, contentComment ) =>{
        try{
            await dataBase();
            const commentReview = await CommentReview.findByIdAndUpdate(id_commentReview, { content : contentComment, dateUpdate: new Date});
            return commentReview;
        }
        catch(err){
            console.log(message.error_update, err);
        }
    },
    deleteCommentReview : async(id_commentReview) => {
        try{
            await dataBase();
            const commentReview = await CommentReview.findByIdAndUpdate(id_commentReview,{status : false, dataUpdate : new Date});
            return commentReview;
        }
        catch(err){
            console.log(message.error_delete,err);
        }
    },
    getOneCommentReview :  async(id_commentReview) => {
        try{
            await dataBase();
            const commentReview = await CommentReview.findOne({_id : id_commentReview, status : true});
            return commentReview;
        }
        catch(err){
            console.log(message.error_get,err);
        }
    },
    getAllReview : async(id_comment) => {
        try{
            await dataBase();
            const commentReview = await CommentReview.find({comment: id_comment,status: true});
            return commentReview;
        }
        catch(err){
            console.log(message.error_get,err);
        }
    }}
