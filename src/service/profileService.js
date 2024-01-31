import { message } from '../common/message.js';
import { dataBase } from '../database/database.js';
import { profileModel } from '../model/profile.js';

export const profileService = {
    // --------  Services  Profile  --------- //

    createProfile: async(data) => {
        try{
                await dataBase();
                const newProfile = new profileModel(data);
                const profile = await newProfile.save();
                return profile;
        }
        catch(err){
            console.log(message.error_create);
        }

    },
    getAllProfile: async() =>{
        try{
            await dataBase();
            const profiles = await profileModel.findAll({status: true})
            return profiles;
        }
        catch(err){
            console.log( message.error_get);
        }
        
    },
    getOneProfile: async(id) =>{
        try{
            await dataBase();
            const profile = await profileModel.findOne({_id : id});
            return profile;
        }
        catch(err){
            console.log(message.error_get)
        }
        
    },
    updateUser: async(id,data)=>{
        try{
            await dataBase();
            const profile = profileModel.findByIdAndUpdate(id,data);
            return profile;

        }
        catch(err){
            console.log( message.error_update);
        }
    },
    deleteUser : async(id) => {
        try{
            await dataBase();
            const profile = profileModel.findByIdAndUpdate(id,{status : false})
            return profile;
        }
        catch(err){
            console.log(message.error_delete);
        }
    },



    // -------- ProfileImage --------- //




    setProfileImage: async(id_profile,id_profileImage) =>{
        try{
            await dataBase();
            const setProfile = await profileModel.findOneAndUpdate({_id:id_profile},{$addToSet  :{"profileImage.$.id_profileImage:": id_profileImage}});
            return setProfile
        }
        catch(err){
            console.log(message.error_set);
        }

    },

    deleteProfileImage: async(id_profile,id_profileImage) =>{
        try{
            await dataBase();
            const deleteProfile = await profileModel.findOneAndUpdate({_id:id_profile},{$pull :{"profileImage.$.id_profileImage:": id_profileImage}});
            return deleteProfile
        }
        catch(err){
            console.log(message.error_set);
        }

    },

    getProfileImage: async(id_profile, id_profileImage) =>{
        try{
            await dataBase();
            const deleteProfile = await profileModel.findOneAndUpdate({_id:id_profile},{$elemMatch : {"profileImage.$.id_profileImage:": id_profileImage}});
            return deleteProfile
        }
        catch(err){
            console.log(message.error_set);
        }
    },



    // ----------- Post --------- //

    setPost: async(id_profile,id_post) =>{
        try{
            await dataBase();
            const set = await profileModel.findOneAndUpdate({_id:id_profile},{$set :{"post.$.id_post:": id_post}});
            return set;
        }
        catch(err){
            console.log(message.error_set);
        }

    },
    deletePost: async(id_profile,id_post) =>{
        try{
            await dataBase();
            const delPost = await profileModel.findOneAndUpdate({_id:id_profile},{$pull :{"post.$.id_post:": id_post}});
            return delPost;
        }
        catch(err){
            console.log(message.error_set);
        }

    },


    // ---------- Follower --------- //


    setFollower: async(id_profile,id_follower) =>{
        try{
            await dataBase();
            const setFollow = await profileModel.findOneAndUpdate({_id:id_profile},{$set :{"follower.$.id_follower:": id_follower}});
            return setFollow;
        }
        catch(err){
            console.log(message.error_set);
        }

    },
    deleteFollower: async(id_profile,id_follower) =>{
        try{
            await dataBase();
            const deleteFollow = await profileModel.findOneAndUpdate({_id:id_profile},{$pull :{"follower.$.id_follower:": id_follower}});
            return deleteFollow;
        }
        catch(err){
            console.log(message.error_set);
        }

    },

    // --------- byFollowing ------------ //


    setByFollowing : async(id_profile,id_following) =>{
        try{
            await dataBase();
            const byFollowing = await profileModel.findOneAndUpdate({_id:id_profile},{$set :{"follower.$.id_following:": id_following}});
            return byFollowing;
        }
        catch{
            console.log(message.error_set)
        }
    },
    deleteByFollowing : async(id_profile,id_following) =>{
        try{
            await dataBase();
            const deleteFollowing = await profileModel.findOneAndUpdate({_id:id_profile},{$pull :{"follower.$.id_following:": id_following}});
            return deleteFollowing;
        }
        catch{
            console.log(message.error_set)
        }
    }
}