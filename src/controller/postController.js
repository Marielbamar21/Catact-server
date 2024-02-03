import { response, request } from "express";
import { postService } from "../service/postService.js";
import { handleError,handleResponse } from "../common/errorHandlers.js"
import { message } from "../common/message.js";
export const postController = {
    createPost: async(req = request, res = response) =>{
        try{
            const { heather , content } = req.body;
            const { params : {id_profile}} = req;
            const post = await postService.createPost({id_profile_autor: id_profile, heather : heather , content : content});
            handleResponse(res,200,message.create_post,post);

        }
        catch(err){
            handleError(err,res);
        }
        

    },
    getAllPost: async(req = request, res = response) => {
        try{
            const posts = await postService.getAllPost();
            handleResponse(res,200,message.message_succes,posts);
        }
        catch(err){
            handleError(err,res);
        }
    },
    getPost: async(req = request, res = response) => 
    {
        try{
            const { params : {id_profile}} = req;
            const posts = await postService.getPost(id_profile);
            handleResponse(res,200,message.message_succes,posts);
        }
        catch(err){
            handleError(err,res);
        }
    },
    getPostbyUser: async(req = request, res = response) => 
    {
        try{
            const { params : {id_profile}} = req;
            const posts = await postService.getAllPostbyUser(id_profile);
            handleResponse(res,200,message.message_succes,posts);
        }
        catch(err){
            handleError(err,res);
        }
    },
    updatePost: async(req = request, res = response) => {
        try{
            const { params : {id_post}} = req;
            const { body } = req;
            const post = await postService.updatePost(id_post,body);
            handleResponse(res,200,message.update_succesful,post);
        }
        catch(err){
            handleError(err,res);
        }
    },
    deletePost: async(req = request, res = response) => {
        try{
            const { params : {id_post}} = req;
            const post = await postService.deletePost(id_post);
            handleResponse(res,200,message.update_succesful,post);
        }
        catch(err){
            handleError(err,res);
        }
    },
    addUserLike: async(req = request, res = response) => {
        try{
            const { params : {id_post, id_profile}} = req;
            const post = await postService.createUserLike(id_post,id_profile);
            handleResponse(res,200,message.update_succesful,post);
        }
        catch(err){
            handleError(err,res);
        }
    },
    deleteUserLike: async(req = request, res = response) => {
        try{
            const { params : {id_post, id_profile}} = req;
            const post = await postService.deleteUserLike(id_post, id_profile);
            handleResponse(res,200,message.update_succesful,post);
        }
        catch(err){
            handleError(err,res)
        }
    }
}