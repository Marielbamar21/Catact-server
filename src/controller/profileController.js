import { request, response } from "express";
import { profileService } from "../service/profileService.js";
import { userService } from "../service/userService.js"
import { handleError,handleResponse } from "../common/errorHandlers.js";
import { message } from "../common/message.js";

export const profileController = {

    createProfile: async(req = request, res = response) => {
        try{
            const  {body} = req;
            const newUser = await userService.createUser(body);
            console.log(newUser._id);
            const newProfile = await profileService.createProfile({ id_user : newUser._id});
            handleResponse(res,200,message.create_user, newProfile);

        }
        catch(err){
            handleError(err,res);
        }
    },
    getAllProfile : async(req = request, res = response) => {
        try{
            const profiles = await profileService.getAllProfile();
            handleResponse(res,200,message.message_succes,profiles);
        }
        catch(err){
            handleError(err,res);

        }
    },
    
    getProfile : async(req = request, res = response) => {
        try{
            const {params : {id_profile}} = req
            const profile = await profileService.getOneProfile(id_profile);
            handleResponse(res,200,message.message_succes,profile);
        }
        catch(err){
            handleError(err,res);

        }
    },
    deleteProfile: async( req = request, res = response ) => {
        try{
            const { params : {id_profile}} = req;
            const profile = await profileService.deleteProfile(id_profile);
            const user = await userService.deleteUser(profile.id_user);
            console.log(user);
            handleResponse(res,200,message.message_succes,profile);
            return;
        }
        catch(err){
            handleError(err,res);
        }

    },
    
    }
