import dataBase from "../database/database.js";
import { Hashtag } from "../model/hashtag.js";
import { message } from "../common/message.js"

export const hashtagService = {
    createHashtag : async( name ) => {
        try{
            await dataBase();
            console.log(name)
            const newHashtag = new Hashtag(name);
            const hashtag = newHashtag.save();
            return hashtag;
        }
        catch(err){
            console.log( message.error_create, err);
            return null;
        }
    },
    getHashtag :  async( id_hashtag) => {
        try{
            await dataBase();
            const hashtag = await Hashtag.findOne({_id : id_hashtag })
            return hashtag;
        }
        catch(err){
            console.log( message.error_get, err);
            return null;
        }
    },
    getHashtagByName : async(name) => {
        try{
            await dataBase();
            const hashtag = await Hashtag.findOne({ name : name })
            return hashtag;
        }
        catch(err){
            console.log( message.error_get, err);
            return null;
        }
    },
    getAllHashtag : async() =>{
        try{
        await dataBase();
        const hashtags = await Hashtag.find({status: true});
        return hashtags;
        }
        catch(err){
            console.log(message.error_get,err);
            return null;
        }
    },
    deleteHashtag : async(id_hashtag) =>{
        try{
            await dataBase();
            const hashtag = await Hashtag.deleteOne({_id : id_hashtag});
            return hashtag;
            }
            catch(err){
                console.log(message.error_delete,err);
                return null;
            }

    }
}