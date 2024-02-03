import { userService } from "../../service/userService.js";
import { profileService } from "../../service/profileService.js"
import { handleError, handleResponse } from "../../common/errorHandlers.js";
import { message } from "../../common/message.js";

export const validatorProfile = async(req,res,next)=>{
    try{
        const {params: {id_profile}} = req;
        const profile = await profileService.getOneProfile(id_profile);
        if(!profile){
            handleResponse(res,400,message.err_profile);
            next();
        }
        console.log(message.get_profile);
        console.log(profile);
        console.log('AAAAAAAAAAAAAAAAAAAAAAAHHHHHHH',profile.id_user);
        validatorUser(profile.id_user,res, next);
    }
    catch(err){
        handleError(err,res);
    }

}

const validatorUser = async(id_user,res,next) => {
    try{
        const user = await userService.getUser(id_user);
        if(!user){
            handleResponse(res,400,message.err_user);
        }
        console.log(message.get_user);
        next();
    }
    catch(err){
        console.log('Error al validar el usuario',err)
    }
}