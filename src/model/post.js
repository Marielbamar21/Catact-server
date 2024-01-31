import  { Schema, ObjectId } from "mongoose";

export const postModule = new Schema ({
    id_user: ObjectId,
    id_userLike: [{ id_user: ObjectId}],
    hashtag: [{id_hashtag: ObjectId}],
    heather : String,
    content: String,
    id_comment: [{id_comment: ObjectId}],
    mediaContent: [{id_media: ObjectId}],
    dataCreate: { type: Date , default: Date.now},
    dateUpdate: { type: Date , default: Date.now},
    status: { type: Boolean , default: true}
},{ collection: 'post' });

export const Post = mongoose.model('post', postModule);