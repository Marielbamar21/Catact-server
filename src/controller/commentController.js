import { commentService } from "../service/commentService.js";
import dataBase from "../database/database.js";
import { handleResponse, handleError } from "../common/errorHandlers.js";
import { message } from "../common/message.js";
import { response } from "express";

export const commentController = {

    createComment : async(req = request ,res = response) => {
        try{
            const { body } = req;
            const comment = await commentService.createComment(body);
            handleResponse(res,200,message.create_succesful,comment);
        }
        catch(err){
            handleError(err,res);
        }
    },
    updateComment : async(req = request ,res = response) => {
        try{
            const { params : {id_comment}} = req;
            const { body } = req;
            const comment = await commentService.updateComment(id_comment, body);
            handleResponse(res,200,message.message_succes,comment);
        }
        catch(err){
            handleError(err,res);
        }
    },
    deleteComment : async(req = request ,res = response) =>{
        try{
            const {params : {id_comment}} = req;
            const comment = await commentService.deleteComment(id_comment);
            handleResponse(res,200,message.message_succes);
        }
        catch(err){
            handleError(err,res);
        }
    },
    getComment : async( req = request ,res = response ) => {
        try{
            const {params : {id_comment}} = req;
            const comment = await commentService.getOneComment(id_comment);
            handleResponse(res,200,message.message_succes,comment);
        }
        catch(err){
            handleError(err,res);
        }
    },
    getAllcomment : async( req = request ,res = response ) =>{
        try{
            const comment = await commentService.getAllcomment();
            handleResponse(res,200, message.message_succes,comment);
        }
        catch(err){
            handleError(err,res);
        }
    },
    addUserLike : async( req = request ,res = response ) => {
        try{
            const { params : {id_comment,id_profile}} = req;
            const comment = await commentService.addteUserLike( id_comment, id_profile);
            handleResponse(res,200,message.message_succes,comment);
        }
        catch(err){
            handleError(err,res);
        }
    },
    deleteUserLike :  async( req = request ,res = response ) => {
        try{
            const { params : {id_comment,id_profile}} = req;
            const comment = await commentService.deleteUserLike( id_comment, id_profile);
            handleResponse(res,200,message.message_succes,comment);
        }
        catch(err){
            handleError(err,res);
        }
    },
    addCommentReview : async( req = request ,res = response ) => {
        try{
            const { params : {id_comment,id_commentReview}} = req;
            const comment = await commentService.addCommentReview( id_comment, id_commentReview);
            handleResponse(res,200,message.message_succes,comment);
        }
        catch(err){
            handleError(err,res);
        }
    },
    deleteCommentReview : async( req = request ,res = response ) => {
        try{
            const { params : {id_comment,id_commentReview}} = req;
            const comment = await commentService.deleteCommentReview( id_comment, id_commentReview);
            handleResponse(res,200,message.message_succes,comment);
        }
        catch(err){
            handleError(err,res);
        }
    },
    
}