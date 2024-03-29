import { Post} from "../model/post.js";
import { message } from "../common/message.js";
import  dataBase  from "../database/database.js";
import { ObjectId } from "mongoose";

export const postService = {
    createPost: async(data)=>{
        try{
            await dataBase();
            const newPost = new Post(data);
            const post = await newPost.save();
            return post;
        }
        catch(err){
            console.log(message.error_create, err);
        }
    },
    getAllPost: async() =>{
        try{
            await dataBase();
            const posts = await Post.find({status: true})
            return posts;
        }
        catch(err){
            console.log( message.error_get, err);
        }
        
    },
    getPost: async(id) =>{
        try{
            await dataBase();
            const post = await Post.findOne({_id : id}).populate('comment');
            return post;
        }
        catch(err){
            console.log(message.error_get)
        }
        
    },
    getAllPostbyUser:  async(id_profile) =>{
        try{
            await dataBase();
            const post = await Post.find({id_profile_autor: id_profile});
            return post;
        }
        catch(err){
            console.log(message.error_get,err);
        }}
    ,
    updatePost: async(id,data)=>{
        try{
            await dataBase();
            const post = await Post.findByIdAndUpdate(id, { heather : data.heather , content: data.content, dateUpdate: new Date},{ new : true});
            return { id_user: id , data};

        }
        catch(err){
            console.log( message.error_update, err);
        }
    },
    deletePost : async(id) => {
        try{
            await dataBase();
            const post = Post.findByIdAndUpdate(id,{status : false, dateUpdate: new Date },{ new : true})
            return post;
        }
        catch(err){
            console.log(message.error_delete);
        }
    },
    createUserLike : async(id_post,id_profile) => {
        try{
            await dataBase();
            const userLike = await Post.findByIdAndUpdate(id_post, { $addToSet : { userLike : {id_profile: id_profile} }, dateUpdate: new Date},{new : true}) ;
            return userLike;
        }
        catch(err){
            console.log(message.error_create, err); 
        }
    },
    deleteUserLike : async(id_post,id_profile) => {
        try{
            await dataBase();
            const userLike = await Post.findByIdAndUpdate(id_post, { $pull : { userLike : { id_profile : id_profile} }, dateUpdate: new Date},{new : true});
            return userLike;
        }
        catch(err){
            console.log(message.error_delete,err);
        }
    },
    createHashtag : async(id_post,id_hashtag) => {
        try{
            await dataBase();
            const hashtag = await Post.findByIdAndUpdate(id_post, { $addToSet: { hashtag : { id_hashtag : id_hashtag } },dateUpdate: new Date}, { new: true });
            return hashtag;
        }
        catch(err){
            console.log(message.error_create, err);
        }
    },
    deleteHashtag : async(id_post,id_hashtag) => {
        try{
            await dataBase();
            console.log(id_post, id_hashtag);
            const hashtag = await Post.findByIdAndUpdate(id_post, { $pull : { hashtag : { id_hashtag : id_hashtag } }, dateUpdate: new Date}, { new: true });
            console.log(hashtag);
            return hashtag;
        }
        catch(err){
            console.log(message.error_delete, err);
        }
    },
    
    createComment : async(id_post,id_comment) => {
        try{
            await dataBase();
            const comment = await Post.findByIdAndUpdate(id_post, { $push: { comment : {id_comment : id_comment} }, dateUpdate: new Date},{ new : true});
            return comment;
        }
        catch(err){
            console.log(message.error_create);
        }
    },
    deleteComment : async(id_post,id_comment) => {
        try{
            await dataBase();
            const comment = await Post.findByIdAndUpdate(id_post, { $pull : { comment : {id_comment : id_comment} }, dateUpdate: new Date},{ new : true});
            return comment;
        }
        catch(err){
            console.log(message.error_delete);
        }
    },

    createMediaContent : async(id_post,id_media) => {
        try{
            await dataBase();
            const media = await Post.findByIdAndUpdate(id_post, { $push: { media : id_media }, dateUpdate: new Date},{ new : true});
            return media;
        }
        catch(err){
            console.log(message.error_create);
        }
    },
    deleteMediaContent : async(id_post,id_media) => {
        try{
            await dataBase();
            const media = await Post.findByIdAndUpdate(id_post, { $pull : { media : id_media },dateUpdate: new Date},{ new : true});
            return media;
        }
        catch(err){
            console.log(message.error_delete);
        }
    },
}