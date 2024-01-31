import { User} from "../model/user.js";
import { handleError } from "../common/errorHandlers.js";
import { message } from "../common/message.js";
import  dataBase  from "../database/database.js"

export const userService = {
    createUser: async(data)=>{
        try{
            console.log(data)
            await dataBase();
            const newUser = new User(data);
            console.log(newUser);
            const user = await newUser.save();
            console.log(user)
            return user;
        }
        catch(err){
            console.log(message.error_create, err);

        }
    },
    getAllUser: async() =>{
        try{
            await dataBase();
            const users = await User.find({status: true})
            return users;
        }
        catch(err){
            console.log( message.error_get, err);
        }
        
    },
    getUser: async(id) =>{
        try{
            await dataBase();
            const user = await User.findOne({_id : id});
            return user;
        }
        catch(err){
            console.log(message.error_get)
        }
        
    },
    updateUser: async(id,data)=>{
        try{
            await dataBase();
            const user = await User.findByIdAndUpdate(id, { name : data.name , lastname: data.lastname,
                                                    birthDate: data.birthDate , email : data.email , dateUpdate: new Date});
            return { id_user: id , data};

        }
        catch(err){
            console.log( message.error_update);
        }
    },
    deleteUser : async(id) => {
        try{
            await dataBase();
            const user = User.findByIdAndUpdate(id,{status : false})
            return user;
        }
        catch(err){
            console.log(message.err_delete);
        }
    }
}