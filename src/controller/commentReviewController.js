import { commentReviewService } from "../service/commentReviewService.js";
import dataBase from "../database/database.js";
import { handleResponse, handleError } from "../common/errorHandlers.js";
import { message } from "../common/message.js";
import { response } from "express";

export const commentReviewController = {

    createCommentReview : async(req = request ,res = response) => {
        try{
            const { body } = req;
            const commentReview = await commentReviewService.createCommentReview(body);
            handleResponse(res,200,message.create_succesful,commentReview);
        }
        catch(err){
            handleError(err,res);
        }
    },
    updateCommentReview : async(req = request ,res = response) => {
        try{
            const { params : {id_commentReview}} = req;
            const { body } = req;
            const commentReview = await commentReviewService.updateCommentReview(id_commentReview, body);
            handleResponse(res,200,message.message_succes,commentReview);
        }
        catch(err){
            handleError(err,res);
        }
    },
    deleteCommentReview : async(req = request ,res = response) =>{
        try{
            const {params : {id_commentReview}} = req;
            const commentReview = await commentReviewService.deleteCommentReview(id_commentReview);
            handleResponse(res,200,message.message_succes,commentReview);
        }
        catch(err){
            handleError(err,res);
        }
    },
    getCommentReview : async( req = request ,res = response ) => {
        try{
            const {params : {id_commentReview}} = req;
            const commentReview = await commentReviewService.getCommentReview(id_commentReview);
            handleResponse(res,200,message.message_succes,commentReview);
        }
        catch(err){
            handleError(err,res);
        }
    },
    getAllReviewbyComment : async( req = request ,res = response ) =>{
        try{
            const { params : {id_comment}}=req;
            const commentReview = await commentReviewService.getOneCommentReview(id_comment);
            handleResponse(res,200, message.message_succes,commentReview);
        }
        catch(err){
            handleError(err,res);
        }
    }
    
}