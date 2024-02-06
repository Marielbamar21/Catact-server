import { hashtagService } from "../service/hashtagServer.js";
import { handleError,handleResponse } from "../common/errorHandlers.js";
import { message } from "../common/message.js"


export const hashtagController = {
    createHashtag: async(req,res) => {
        try{
            const { body } = req;
            const hashtag = await hashtagService.createHashtag(body);
            handleResponse(res,200,message.create_succesful, hashtag);
        }
        catch(err){
            console.log(message.error_create, err);
        }
    },
    deleteHashtag : async(req , res) =>{
        try{
            const {params: {id_hashtag}} = req;
            const hashtag = await hashtagService.deleteHashtag(id_hashtag);
            handleResponse(res,200,message.message_succes,hashtag);
        }
        catch(err){
            handleError(err,res);
        }
    },
    getAllHashtag : async(req,res) =>{
        try{
            const hashtag = await hashtagService.getAllHashtag();
            handleResponse(res,200,message.message_succes,hashtag);
        }
        catch(err){
            handleError(err,res);
        }
    },
    getHashtag : async(req,res) =>{
        try{
            const {params : {id_hashtag}} = req;
            const hashtag = await hashtagService.getHashtag(id_hashtag);
            handleResponse(res,200,message.message_succes,hashtag)
        }
        catch(err){
            handleError(err,res);
        }
    }
}