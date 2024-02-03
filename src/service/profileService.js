import { message } from '../common/message.js';
import  dataBase  from '../database/database.js';
import { Profile } from '../model/profile.js';

export const profileService = {
    // --------  Services  Profile  --------- //

    createProfile: async(data) => {
        try{
                await dataBase();
                const newProfile = new Profile(data);
                const profile = await newProfile.save();
                return profile;
        }
        catch(err){
            console.log(message.error_create, err);
        }

    },
    getAllProfile: async() =>{
        try{
            await dataBase();
            const profiles = await Profile.find({status: true});
            return profiles;
        }
        catch(err){
            console.log( message.error_get,err);
        }
        
    },
    getOneProfile: async(id) =>{
        try{
            await dataBase();
            console.log(id)
            const profile = await Profile.findOne({_id : id});
            return profile;
        }
        catch(err){
            console.log(message.error_get)
        }
        
    },
    deleteProfile : async(id) => {
        try{
            await dataBase();
            const profile = Profile.findByIdAndUpdate({_id : id },{status : false,dateUpdate: new Date})
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
            const setProfile = await Profile.findOneAndUpdate({_id:id_profile},{$addToSet  :{"profileImage.$.id_profileImage:": id_profileImage}});
            return setProfile
        }
        catch(err){
            console.log(message.error_set);
        }

    },

    deleteProfileImage: async(id_profile,id_profileImage) =>{
        try{
            await dataBase();
            const deleteProfile = await Profile.findOneAndUpdate({_id:id_profile},{$pull :{"profileImage.$.id_profileImage:": id_profileImage}});
            return deleteProfile
        }
        catch(err){
            console.log(message.error_set);
        }

    },

    getProfileImage: async(id_profile, id_profileImage) =>{
        try{
            await dataBase();
            const deleteProfile = await Profile.findOneAndUpdate({_id:id_profile},{$elemMatch : {"profileImage.$.id_profileImage:": id_profileImage}});
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
            const set = await Profile.findOneAndUpdate({_id:id_profile},{$set :{"post.$.id_post:": id_post}});
            return set;
        }
        catch(err){
            console.log(message.error_set);
        }

    },
    deletePost: async(id_profile,id_post) =>{
        try{
            await dataBase();
            const delPost = await Profile.findOneAndUpdate({_id:id_profile},{$pull :{"post.$.id_post:": id_post}});
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
            const setFollow = await Profile.findOneAndUpdate({_id:id_profile},{$set :{"follower.$.id_follower:": id_follower}});
            return setFollow;
        }
        catch(err){
            console.log(message.error_set);
        }

    },
    deleteFollower: async(id_profile,id_follower) =>{
        try{
            await dataBase();
            const deleteFollow = await Profile.findOneAndUpdate({_id:id_profile},{$pull :{"follower.$.id_follower:": id_follower}});
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
            const byFollowing = await Profile.findOneAndUpdate({_id:id_profile},{$set :{"follower.$.id_following:": id_following}});
            return byFollowing;
        }
        catch{
            console.log(message.error_set)
        }
    },
    deleteByFollowing : async(id_profile,id_following) =>{
        try{
            await dataBase();
            const deleteFollowing = await Profile.findOneAndUpdate({_id:id_profile},{$pull :{"follower.$.id_following:": id_following}});
            return deleteFollowing;
        }
        catch{
            console.log(message.error_set)
        }
    }
}