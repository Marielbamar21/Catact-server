import  { Schema, ObjectId, mongoose } from "mongoose";

const postSchema = new Schema ({
    id_profile_autor: { type:ObjectId , ref: 'profile'},
    userLike: [{_id : false ,id_profile : { type: ObjectId, ref: 'profile'}}],
    hashtag: [{_id: false, id_hashtag: { type:ObjectId, ref: 'profile'}}],
    heather : String,
    content: String,
    comment: [{_id: false,id_comment: {type : ObjectId , ref: 'comment'}}],
    mediaContent: [ {_id: false,id_media: {type : ObjectId , ref: 'media'}}],
    dataCreate: { type: Date , default: Date.now},
    dateUpdate: { type: Date , default: Date.now},
    status: { type: Boolean , default: true}
},{ collection: 'post' });

export const Post = mongoose.model('post', postSchema);