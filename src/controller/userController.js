import { request, response } from "express";
import { userService } from "../service/userService.js";
import { handleError,handleResponse } from "../common/errorHandlers.js";
import { message } from "../common/message.js";

export const userController = {

    createUser: async(body) => {
        try{
           
            console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',body);
            const newUser = await userService.createUser(body);
            handleResponse(res, 200,message.create_user,newUser);

        }
        catch(err){
            console.log(err,res);
        }
    },
    getAllUser : async(req, res ) => {
        try{
            const users = await userService.getAllUser();
            handleResponse(res,200,message.message_succes,users);
        }
        catch(err){
            handleError(err,res);

        }
    },
    
    getUser : async(req = request, res = response) => {
        try{
            const {params : {id_user}} = req
            const user = await userService.getUser(id_user);
            handleResponse(res,200,message.message_succes,user);
        }
        catch(err){
            handleError(err,res);

        }
    },
    updateUser : async(req = request, res = response) => {
        try{
            const { id_user}  = req.params
            const { body } = req;
            console.log(body)
            const user = await userService.updateUser(id_user , body );
            handleResponse(res,200,message.message_succes,user);
        }
        catch(err){
            handleError(err,res);

        }
    },
    deleteUser: async( req = request, res = response ) => {
        try{
            const { params : {id_user}} = req;
            const delUser = await userService.deleteUser(id_user);
            handleResponse(res,200,message.message_succes,delUser);
        }
        catch(err){
            handleError(err,res);
        }

    }

}